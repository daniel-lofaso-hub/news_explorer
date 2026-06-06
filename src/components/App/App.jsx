import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="page">
      <div className="page__header">
        <Header isLoggedIn={isLoggedIn} />
        <SearchForm />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
