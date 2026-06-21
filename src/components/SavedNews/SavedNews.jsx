import "./SavedNews.css";
import { useContext } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNews({
  isLoggedIn,
  onDropdownClick,
  savedArticles,
  onCardSave,
  onLogout,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved-news">
      <div className="saved-news__header">
        <Header variant="saved" />
        <Navigation
          variant="saved"
          isLoggedIn={isLoggedIn}
          onDropdownClick={onDropdownClick}
          onLogout={onLogout}
        />
      </div>
      <div className="saved-news__profile">
        <h2 className="saved-news__profile_title">Saved articles</h2>
        <h2 className="saved-news__profile_text">
          {currentUser.name}, you have {savedArticles.length} saved{" "}
          {savedArticles.length == 1 ? "article" : "articles"}
        </h2>
        <h3 className="saved-news__profile_keywords">
          By keywords:{" "}
          <span className="saved-news__profile_keywords-bold">
            "X", "Y", and 2 other
          </span>
        </h3>
      </div>
      <div className="saved-news__articles">
        {savedArticles.map((item, index) => (
          <NewsCard
            variant="saved"
            key={index}
            item={item}
            onCardSave={onCardSave}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedNews;
