import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { initialCards } from "../../constants";
import { useState } from "react";

function NewsCardList() {
  const itemsPerPage = 3;

  const [visibleItems, setVisibleItems] = useState(
    initialCards.slice(0, itemsPerPage),
  );

  const loadMoreItems = () => {
    const nextIndex = visibleItems.length;

    const nextBatch = initialCards.slice(nextIndex, nextIndex + itemsPerPage);

    setVisibleItems([...visibleItems, ...nextBatch]);
  };

  const hasMore = visibleItems.length < initialCards.length;

  return (
    <div className="card-list">
      <h2 className="card-list__heading">Search results</h2>
      <ul className="card-list__list">
        {visibleItems.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </ul>
      {hasMore && (
        <button className="card-list__more-btn" onClick={loadMoreItems}>
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
