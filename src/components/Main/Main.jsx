import "./Main.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";

function Main({
  isLoggedIn,
  onLoginClick,
  onDropdownClick,
  onSearchSubmit,
  articles,
  isLoading,
  searchPerformed,
  searchError,
}) {
  return (
    <main className="main">
      <div className="main__background">
        <div className="main__header">
          <Header />
          <Navigation
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            onDropdownClick={onDropdownClick}
          />
        </div>
        <SearchForm onSearchSubmit={onSearchSubmit} />
      </div>

      {searchPerformed && (
        <div className="main__results">
          {isLoading ? <Preloader /> : <NewsCardList articles={articles} />}
          {searchError && <p className="main__error">{searchError}</p>}
        </div>
      )}

      <About />
    </main>
  );
}

export default Main;
