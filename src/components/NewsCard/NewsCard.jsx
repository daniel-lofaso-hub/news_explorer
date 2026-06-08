import "./NewsCard.css";

function NewsCard({ item }) {
  return (
    <li className="card">
      <button className="card__bookmark"></button>
      <img className="card__image" alt={item.title} src={item.urlToImage} />
      <div className="card__content">
        <h2 className="card__date">{item.publishedAt}</h2>
        <h2 className="card__title">{item.title}</h2>
        <p className="card__description">{item.description}</p>
        <h3 className="card__source">{item.sourcename}</h3>
      </div>
    </li>
  );
}

export default NewsCard;
