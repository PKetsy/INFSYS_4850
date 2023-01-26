import React from "react";
import "./Beverages.css";
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Lemonade1",
    description: "description1",
  },
  {
    title: "Lemonade2",
    description: "description2",
  },
  {
    title: "Apple Cidre1",
    description: "description3",
  },
];

const Beverages = () => {
  return (
    <div className="section">
      <div className="container-beverages">
        <h1 className="heading-secondary">
          <span>Beverages</span>
        </h1>
        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
