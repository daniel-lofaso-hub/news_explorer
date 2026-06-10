import "./NewsCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NewsCard({ item }) {
  //const currentUser = useContext(CurrentUserContext);

  //const handleSave = () => onCardSave({ id: item._id, isSaved });

  //const isSaved = currentUser
  //? item.saved.some((id) => id === currentUser._id)
  //: false;

  return (
    <li className="card">
      <button className="card__bookmark"></button>
      <img className="card__image" alt={item.title} src={item.urlToImage} />
      <div className="card__content">
        <h2 className="card__date">{item.publishedAt}</h2>
        <div className="card__article">
          <h2 className="card__title">{item.title}</h2>
          <p className="card__description">{item.description}</p>
          <h3 className="card__source">{item.sourcename}</h3>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
