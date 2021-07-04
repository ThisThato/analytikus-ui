import React from "react";
import cities from "../services/data";
import Card from "../components/Card";

const CardScreen = () => {
  return (
    <div className="container">
      {cities.map((city) => (
        <Card city={city} />
      ))}
    </div>
  );
};

export default CardScreen;
