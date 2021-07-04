import React from "react";

const Card = ({ city }) => {
  return (
    <>
      {
        <div className="card">
          <img src={city.image} alt={city.name} />
          <div className="card-text">
            <h2>
              {city.name} <span style={{ float: "right" }}>{city.continent}</span>
            </h2>
            <hr style={{ color: "orange" }} />
            <p>{city.description}</p>
          </div>
        </div>
      }
    </>
  );
};

export default Card;
