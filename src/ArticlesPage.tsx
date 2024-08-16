import React, { useState, useEffect } from 'react';
import './ArticlesPage.css';

interface Article {
  id: string;
  title: string;
  summary: string;
}

const fetchArticles = async (page: number, limit: number): Promise<Article[]> => {
  try {
    const start = (page - 1) * limit;
    const response = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=mental health review&retstart=${start}&retmax=${limit}&sort=pub+date&api_key=332da950252813747d7c2fa27f5f33173e08`
    );
    const xml = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    const idList = Array.from(xmlDoc.getElementsByTagName('IdList')[0]?.getElementsByTagName('Id') || [])
      .map(idNode => idNode.textContent || '');

    if (idList.length === 0) return []; // No articles found

    const fetchDetailsResponse = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${idList.join(',')}&api_key=332da950252813747d7c2fa27f5f33173e08`
    );
    const detailsXml = await fetchDetailsResponse.text();
    const detailsDoc = parser.parseFromString(detailsXml, "text/xml");

    const articles = Array.from(detailsDoc.getElementsByTagName('DocSum')).map(docSum => {
      const id = docSum.getElementsByTagName('Id')[0]?.textContent || '';
      const items = Array.from(docSum.getElementsByTagName('Item'));

      const title = items.find(item => item.getAttribute('Name') === 'Title')?.textContent || 'No title';
      const summary = items.find(item => item.getAttribute('Name') === 'Source')?.textContent || 'No summary';

      return { id, title, summary };
    });

    return articles;
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
};

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMoreArticles = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newArticles = await fetchArticles(page, 5);
      setArticles(prevArticles => [...prevArticles, ...newArticles]);
      setPage(prevPage => prevPage + 1);
      setHasMore(newArticles.length > 0);
    } catch (error) {
      console.error('Failed to load more articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreArticles();
  }, []);

  return (
    <>
      <div className='button home-button'>
          Домой
      </div>
      <div className="articles-page">
        <div className='div-intro'>Перейдите к чтениям статьей на интересующую вас тему</div>
        <div className="articles-container">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-summary">{article.summary}</p>
            </div>
          ))}
        </div>
        {hasMore && (
          <button className="load-more-button" onClick={loadMoreArticles} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </>
  );
};

export default ArticlesPage;
