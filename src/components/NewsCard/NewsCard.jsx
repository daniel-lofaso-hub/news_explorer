import "./NewsCard.css";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

function NewsCard({ item }) {
  const sourceName = item.source?.name || item.sourcename || "Unknown source";

  return (
    <li className="card">
      <button className="card__bookmark"></button>
      <a href={item.url}>
        <img className="card__image" alt={item.title} src={item.urlToImage} />
      </a>
      <div className="card__content">
        <h2 className="card__date">{formatDate(item.publishedAt)}</h2>
        <div className="card__article">
          <h2 className="card__title">{item.title}</h2>
          <p className="card__description">{item.description}</p>
          <h3 className="card__source">{sourceName}</h3>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
