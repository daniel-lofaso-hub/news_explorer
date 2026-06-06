import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__text">
        Find the latest news on any topic and save them to your personal
        account.
      </p>
      <div className="search-form__search-bar">
        <input
          className="search-form__input"
          id="text"
          type="text"
          placeholder="Enter topic"
        />
        <button type="button" className="search-form__submit">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
