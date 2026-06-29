import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearchSubmit }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!keyword.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearchSubmit(keyword.trim());
  };

  return (
    <section className="search-form">
      <div className="search-form__content">
        <h1 className="search-form__title">
          {"What's going on in the world?"}
        </h1>
        <p className="search-form__text">
          Find the latest news on any topic and save them to your personal
          account.
        </p>
        <form
          className="search-form__search-bar"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className="search-form__input"
            id="input"
            type="text"
            placeholder="Enter topic"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              if (error) setError("");
            }}
          />
          <button type="submit" className="search-form__submit">
            Search
          </button>
          {error && <p className="search-form__error">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
