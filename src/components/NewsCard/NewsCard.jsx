import "./NewsCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

function NewsCard({ item, onCardSave }) {
  const currentUser = useContext(CurrentUserContext);

  const sourceName = item.source?.name || item.sourcename || "Unknown source";

  const handleBookmark = () => {
    onCardSave(item);
  };

  const isSaved = currentUser?.savedArticles?.some(
    (article) => article.url === item.url,
  );

  const bookmarkBtnClassName = `card__bookmark ${isSaved ? "card__bookmark_active" : ""}`;

  return (
    <li className="card">
      <button
        className={bookmarkBtnClassName}
        onClick={handleBookmark}
      ></button>
      <a className="card__link" href={item.url}>
        <img className="card__image" alt={item.title} src={item.urlToImage} />

        <div className="card__content">
          <h2 className="card__date">{formatDate(item.publishedAt)}</h2>
          <div className="card__article">
            <h2 className="card__title">{item.title}</h2>
            <p className="card__description">{item.description}</p>
            <h3 className="card__source">{sourceName}</h3>
          </div>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
