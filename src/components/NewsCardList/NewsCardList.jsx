import { useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles = [] }) {
  const itemsPerPage = 3;
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(articles.slice(0, itemsPerPage));
  }, [articles]);

  const loadMoreItems = () => {
    const nextIndex = visibleItems.length;
    const nextBatch = articles.slice(nextIndex, nextIndex + itemsPerPage);
    setVisibleItems([...visibleItems, ...nextBatch]);
  };

  const hasMore = visibleItems.length < articles.length;

  return (
    <div className="card-list">
      <h2 className="card-list__heading">Search results</h2>
      {articles.length === 0 ? (
        <p className="card-list__empty">Nothing found</p>
      ) : (
        <>
          <ul className="card-list__list">
            {visibleItems.map((item, index) => (
              <NewsCard key={`${item.title}-${index}`} item={item} />
            ))}
          </ul>
          {hasMore && (
            <button className="card-list__more-btn" onClick={loadMoreItems}>
              Show more
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default NewsCardList;
