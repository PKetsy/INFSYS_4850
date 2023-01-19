import React from "react";
import "./Other.css";

import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
  {
    title: "Other1",
    description: "description1",
  },
  {
    title: "Other2",
    description: "description2",
  },
  {
    title: "Other3",
    description: "description3",
  },
];

const menuDataRight = [
  {
    title: "Other4",
    description: "description4",
  },
  {
    title: "Other5",
    description: "description5",
  },
  {
    title: "Other6",
    description: "description6",
  },
];

const Other = () => {
  return (
    <div className="section">
      <div className="container-other">
        <h1 className="heading-secondary">
          <span>Other</span>
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

export default Other;
