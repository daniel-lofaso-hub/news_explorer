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
    <div>
      <ul className="cards">
        {visibleItems.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </ul>
      {hasMore && (
        <button className="cards__more-btn" onClick={loadMoreItems}>
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
