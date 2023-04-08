import React from 'react';
import './Vegetables.css';

import ListItem from '../../../components/ListItem/ListItem';

const menuDataLeft = [
  {
    title: 'Vegetable1',
    description: 'description1',
  },
  {
    title: 'Vegetable2',
    description: 'description2',
  },
  {
    title: 'Vegetable3',
    description: 'description3',
  },
  {
    title: 'Vegetable4',
    description: 'description4',
  },
  {
    title: 'Vegetable5',
    description: 'description5',
  },
  {
    title: 'Vegetable6',
    description: 'description6',
  },
];

const Vegetables = () => {
  return (
    <div className="section">
      <div className="container-vegetables">
        <h1 className="heading-secondary">
          <span>VEGETABLES</span>
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

export default Vegetables;
