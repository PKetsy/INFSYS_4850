import React from 'react';
import './Fruits.css';
import ListItem from '../../../components/ListItem/ListItem';

const menuDataLeft = [
  {
    title: 'Fruit1',
    description: 'description1',
  },
  {
    title: 'Fruit2',
    description: 'description2',
  },
  {
    title: 'Fruit3',
    description: 'description3',
  },
  {
    title: 'Fruit4',
    description: 'description4',
  },
  {
    title: 'Fruit5',
    description: 'description5',
  },
  {
    title: 'Fruit6',
    description: 'description6',
  },
];

const Fruits = () => {
  return (
    <div className="container-fruits">
      <h1 className="heading-secondary">
        <span>FRUITS</span>
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
  );
};

export default Fruits;
