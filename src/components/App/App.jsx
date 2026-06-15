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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: "Daniel" });
  const [activeModal, setActiveModal] = useState("");

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
