import { useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import notFoundImage from "../../assets/not-found.svg";

function NewsCardList({ isLoggedIn, articles = [], onCardSave, onLogout }) {
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
      {articles.length === 0 ? (
        <div className="card-list__empty">
          <img
            className="card-list__empty-image"
            src={notFoundImage}
            alt="No results"
          />
          <h3 className="card-list__empty-title">Nothing found</h3>
          <p className="card-list__empty-text">
            Sorry, but nothing matched
            <br />
            your search terms.
          </p>
        </div>
      ) : (
        <>
          <h2 className="card-list__heading">Search results</h2>
          <ul className="card-list__list">
            {visibleItems.map((item, index) => (
              <NewsCard
                key={`${item.title}-${index}`}
                item={item}
                onCardSave={onCardSave}
                isLoggedIn={isLoggedIn}
                onLogout={onLogout}
              />
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
