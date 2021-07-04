import React, { useState, useEffect } from "react";
import cities from "../services/data";
import Card from "../components/Card";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState("All");
  const [filteredCities, setFilteredCities] = useState([]);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    tag === "All" ? setFilteredCities(cities) : setFilteredCities(cities.filter((c) => c.continent === tag));
  }, [tag]);

  const navigation = [
    { link: "#", text: "All" },
    { link: "#", text: "Africa" },
    { link: "#", text: "Europe" },
    { link: "#", text: "Asia" },
    { link: "#", text: "North America" },
    { link: "#", text: "South America" },
  ];

  return (
    <>
      <div className="header">
        <h1>
          Travel List
          <span>
            <hr />
          </span>
        </h1>

        <button className="menu-toggle" onClick={toggle} style={{ textAlign: "left" }}>
          Filter <i className={`${isOpen ? "fas fa-minus" : "fas fa-plus"}`}></i>
        </button>
        {isOpen ? (
          <div className="nav">
            <ul>
              {navigation.map((item, index) => (
                <li key={index}>
                  <a href={item.link} onClick={() => setTag(item.text)}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="container">
        {filteredCities.map((city) => (
          <Card city={city} />
        ))}
      </div>
    </>
  );
};

export default Header;
