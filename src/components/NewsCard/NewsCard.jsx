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

function NewsCard({ item, onCardSave, isLoggedIn, variant = "default" }) {
  const currentUser = useContext(CurrentUserContext);

  const sourceName = item.source?.name || item.sourcename || "Unknown source";

  const handleBookmark = () => {
    if (isLoggedIn) {
      onCardSave(item);
    }
  };

  const isSaved = currentUser?.savedArticles?.some(
    (article) => article.url === item.url,
  );

  const styles = {
    default: "card",
    saved: "card-saved",
  };
  const appliedClasses = styles[variant] || styles.default;
  const bookmarkBtnClassName = `${appliedClasses}__bookmark ${isSaved ? `${appliedClasses}__bookmark_saved` : ""}`;

  return (
    <li className={appliedClasses}>
      <h2 className={`${appliedClasses}__keyword`}>{item.keyword}</h2>
      <button
        disabled={!isLoggedIn}
        className={bookmarkBtnClassName}
        onClick={handleBookmark}
      >
        {!isLoggedIn ? (
          <span className={`${appliedClasses}__bookmark_text`}>
            Sign in to save articles
          </span>
        ) : isSaved ? (
          <span className={`${appliedClasses}__bookmark_text`}>
            Remove from saved
          </span>
        ) : null}
      </button>
      <a
        className={`${appliedClasses}__link`}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`${appliedClasses}__image`}
          alt={item.title}
          src={item.urlToImage}
        />

        <div className={`${appliedClasses}__content`}>
          <h2 className={`${appliedClasses}__date`}>
            {formatDate(item.publishedAt)}
          </h2>
          <div className={`${appliedClasses}__article`}>
            <h2 className={`${appliedClasses}__title`}>{item.title}</h2>
            <p className={`${appliedClasses}__description`}>
              {item.description}
            </p>
            <h3 className={`${appliedClasses}__source`}>{sourceName}</h3>
          </div>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
