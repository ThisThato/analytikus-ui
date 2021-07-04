import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigation = [
    { link: "#", text: "All" },
    { link: "#", text: "Africa" },
    { link: "#", text: "Europe" },
    { link: "#", text: "Asia" },
    { link: "#", text: "North America" },
    { link: "#", text: "South America" },
  ];

  return (
    <div className="header">
      <h1>
        Travel List
        <span>
          <hr />
        </span>
      </h1>

      <button className="menu-toggle" onClick={toggle}>
        Filter <i className={`${isOpen ? "fas fa-minus" : "fas fa-plus"}`}></i>
      </button>
      {isOpen ? (
        <div className="nav">
          <ul>
            {navigation.map((item) => (
              <li key={item.text}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
