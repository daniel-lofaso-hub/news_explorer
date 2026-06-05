import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function App() {
  return (
    <div className="page">
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
