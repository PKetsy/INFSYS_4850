import React from "react";
import "./Seafood.css";

import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Seafood1",
    description: "description1",
  },
  {
    title: "Seafood2",
    description: "description2",
  },
  {
    title: "Seafood3",
    description: "description3",
  },
];

const menuDataRight = [
  {
    title: "Seafood4",
    description: "description4",
  },
  {
    title: "Seafood5",
    description: "description5",
  },
  {
    title: "Seafood6",
    description: "description6",
  },
];

const Seafood = () => {
  return (
    <div className="section">
      <div className="container-seafood">
        <h1 className="heading-secondary">
          <span>Seafood</span>
        </h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem title={data.title} description={data.description} />
            ))}
          </div>

          <div>
            {menuDataRight.map((data, i) => (
              <ListItem title={data.title} description={data.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seafood;
