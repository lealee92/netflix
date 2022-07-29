import React from "react";
import Section from "../components/Section";
import MoviesList from "../data/movies.json";
import Logo from "../data/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} />
      {MoviesList.map((item, index) => {
        return (
          <Section key={index} category={item.category} images={item.images} />
        );
      })}
    </div>
  );
}

export default App;
