import React from "react";

const Section = ({ category, images }) => {
  // récupération des props passées depuis app.js au composant section
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="movies-list">
        {images.map((img, index) => {
          {
            /* .map() sur le tableau images présent dans chaque élément du JSON  */
          }

          return <img key={index} alt="movie" src={img} />;
        })}
      </div>
    </div>
  );
};

export default Section;
