import "./Main.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Prelaoder from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";

function Main({ isLoggedIn }) {
  return (
    <main className="main">
      <div className="main__background">
        <div className="main__header">
          <Header />
          <Navigation isLoggedIn={isLoggedIn} />
        </div>
        <SearchForm />
      </div>
      <Prelaoder />
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
