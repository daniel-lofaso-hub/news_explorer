import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: "Daniel" });
  const [activeModal, setActiveModal] = useState("");

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/saved-news"
            element={<SavedNews isLoggedIn={isLoggedIn} />}
          />
        </Routes>
        <Footer />
      </div>
      <LoginModal isOpen={activeModal === "login"} />
    </CurrentUserContext.Provider>
  );
}

export default App;
