import "./SavedNews.css";
import { useContext } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";
import { savedCards } from "../../constants";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNews({ isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved-news">
      <div className="saved-news__header">
        <Header variant="saved" />
        <Navigation variant="saved" isLoggedIn={isLoggedIn} />
      </div>
      <div className="saved-news__profile">
        <h2>Saved articles</h2>
        <h2>{currentUser.name}, you have "#" saved articles</h2>
        <h3>By keywords: "X", "Y", and 2 other</h3>
      </div>
      <div className="saved-news__articles">
        {savedCards.map((item, index) => (
          <NewsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SavedNews;
