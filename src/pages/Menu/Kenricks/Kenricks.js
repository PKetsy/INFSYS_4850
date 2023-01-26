import React from "react";
import "./Kenricks.css";

import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Kenricks1",
    description: "description1",
  },
  {
    title: "Kenricks2",
    description: "description2",
  },
  {
    title: "Kenricks3",
    description: "description3",
  },
];

const menuDataRight = [
  {
    title: "Kenricks4",
    description: "description4",
  },
  {
    title: "Kenricks5",
    description: "description5",
  },
  {
    title: "Kenricks6",
    description: "description6",
  },
];

const Kenricks = () => {
  return (
    <div className="section">
      <div className="container-kenricks">
        <h1 className="heading-secondary">
          <span>Kenrick's Bratwurst</span>
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

export default Kenricks;
