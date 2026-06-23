import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationCompleteModal from "../RegistrationCompleteModal/RegistrationCompleteModal";
import DropdownModal from "../DropdownModal/DropdownModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { fetchNews } from "../../utils/newsApi";
import { saveArticle, removeSavedArticle } from "../../utils/api";
import { signUp, signIn, validateToken } from "../../utils/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState();
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

  const saveCurrentUser = (userData) => {
    const user = userData?.data || userData || null;
    setCurrentUser(user);
  };

  const getErrorMessage = (err) => {
    if (!err) return "An error occurred";
    if (typeof err === "string") return err;
    if (err.message) return err.message;
    try {
      return JSON.stringify(err);
    } catch {
      return String(err);
    }
  };

  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openRegistrationCompleteModal = () => {
    setActiveModal("registration-complete");
  };

  const openDropdownModal = () => {
    setActiveModal("dropdown");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    setActiveModal("");
  };

  const onRegister = (inputValues) => {
    console.log("Registering with:", inputValues);
    return signUp(inputValues)
      .then(() => {
        openRegistrationCompleteModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onLogin = (inputValues) => {
    return signIn(inputValues)
      .then((data) => {
        const token = data?.token;
        if (!token) {
          return Promise.reject("No token returned from signin");
        }
        localStorage.setItem("jwt", token);
        return validateToken(token);
      })
      .then((userData) => {
        saveCurrentUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(getErrorMessage(err));
      })
      .finally(() => {
        setIsLoggedIn(true);
      });
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
    const token = localStorage.getItem("jwt");
    const existingSavedArticle = savedArticles.find(
      (item) => (card._id && item._id === card._id) || item.url === card.url,
    );

    if (!existingSavedArticle) {
      saveArticle(card, token)
        .then((savedArticle) => {
          setSavedArticles((prevSaved) => [...prevSaved, savedArticle]);
        })
        .catch((err) => {
          console.error("Error saving article:", err);
        });
      return;
    }

    removeSavedArticle(existingSavedArticle._id, token)
      .then(() => {
        setSavedArticles((prevSaved) =>
          prevSaved.filter((item) => item._id !== existingSavedArticle._id),
        );
      })
      .catch((err) => {
        console.error("Error removing saved article:", err);
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
        onLogin={onLogin}
      />
      <RegisterModal
        isOpen={activeModal === "signup"}
        onLoginClick={openLoginModal}
        onClose={closeActiveModal}
        onRegister={onRegister}
      />
      <DropdownModal
        isLoggedIn={isLoggedIn}
        isOpen={activeModal === "dropdown"}
        onLoginClick={openLoginModal}
        onClose={closeActiveModal}
        onLogin={onLogin}
        onLogout={handleLogout}
      />
      <RegistrationCompleteModal
        isOpen={activeModal === "registration-complete"}
        onClose={closeActiveModal}
        onLoginClick={openLoginModal}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
