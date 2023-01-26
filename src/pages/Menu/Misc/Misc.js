import React from "react";
import "./Misc.css";

import ListItem from "../../../components/ListItem/ListItem";
import MiscCover from "../../../assets/MiscCover.jpg";

const menuDataRight = [
  {
    title: "Misc1",
    description: "description1",
  },
  {
    title: "Misc2",
    description: "description2",
  },
  {
    title: "Misc3",
    description: "description3",
  },
  {
    title: "Misc4",
    description: "description4",
  },
  {
    title: "Misc5",
    description: "description5",
  },
  {
    title: "Misc6",
    description: "description6",
  },
];

const Misc = () => {
  return (
    <div className="container_misc-selection">
      <h1 className="heading-secondary">
        <span>Misc Selection</span>
      </h1>
      <div className="grid-container">
        <div>
          <img src={MiscCover} alt="misc-items" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem title={data.title} description={data.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Misc;
