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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { fetchNews } from "../../utils/newsApi";
import { addCardSave, removeCardSave } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: "Daniel" });
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState("");

  const currentUserValue = { ...currentUser, savedArticles };

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

  const handleLogout = () => {
    // localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
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
      const articlesWithKeyword = (response.articles || []).map((article) => ({
        ...article,
        keyword,
      }));
      setArticles(articlesWithKeyword);
    } catch (err) {
      await delay;
      setSearchError("Failed to fetch news");
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardSave = (card) => {
    setSavedArticles((prevSaved) => {
      const matchById = card._id && ((item) => item._id === card._id);
      const matchByUrl = card.url && ((item) => item.url === card.url);
      const isSaved = prevSaved.some(
        (item) =>
          (matchById && matchById(item)) || (matchByUrl && matchByUrl(item)),
      );

      if (isSaved) {
        return prevSaved.filter(
          (item) =>
            !(
              (matchById && matchById(item)) ||
              (matchByUrl && matchByUrl(item))
            ),
        );
      }

      return [...prevSaved, { ...card, isSaved: true }];
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUserValue}>
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
                onCardSave={handleCardSave}
                onLogout={handleLogout}
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
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  onDropdownClick={openDropdownModal}
                  onCardSave={handleCardSave}
                  onLogout={handleLogout}
                  savedArticles={savedArticles}
                />
              </ProtectedRoute>
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
        onLogout={handleLogout}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
