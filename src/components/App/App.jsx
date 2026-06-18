import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import DropdownModal from "../DropdownModal/DropdownModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { fetchNews } from "../../utils/newsApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: "Daniel" });
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState("");

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openDropdownModal = () => {
    setActiveModal("dropdown");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSearchSubmit = async (keyword) => {
    setSearchError("");
    setSearchPerformed(true);
    setIsLoading(true);
    setArticles([]);

    const delay = new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await fetchNews(keyword);
      await delay;
      setArticles(response.articles || []);
    } catch (err) {
      await delay;
      setSearchError("Failed to fetch news");
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onLoginClick={openLoginModal}
                onDropdownClick={openDropdownModal}
                onSearchSubmit={onSearchSubmit}
                articles={articles}
                isLoading={isLoading}
                searchPerformed={searchPerformed}
                searchError={searchError}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                isLoggedIn={isLoggedIn}
                onDropdownClick={openDropdownModal}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onRegisterClick={openRegisterModal}
        onClose={closeActiveModal}
      />
      <RegisterModal
        isOpen={activeModal === "signup"}
        onLoginClick={openLoginModal}
        onClose={closeActiveModal}
      />
      <DropdownModal
        isLoggedIn={isLoggedIn}
        isOpen={activeModal === "dropdown"}
        onLoginClick={openLoginModal}
        onClose={closeActiveModal}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
