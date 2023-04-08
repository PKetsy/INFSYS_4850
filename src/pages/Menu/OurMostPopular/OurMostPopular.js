import React from 'react';
import ListItem from '../../../components/ListItem/ListItem';

import './OurMostPopular.css';

import MenuImage1 from '../../../assets/MenuImage1.jpg';
import MenuImage2 from '../../../assets/MenuImage2.jpg';

const menuData = [
  {
    title: 'Snow Crab Legs',
    description: 'Great for boils, baking, or grilling.',
    price: '12.99lb / 4lbs for $50',
    img: MenuImage1,
  },
  {
    title: 'Royal Red Shrimp',
    description: 'Testing testing',
    price: '14.99 lb',
    img: MenuImage2,
  },
];

const OurMostPopular = () => {
  return (
    <div className="section">
      <div className="container-most-popular">
        <h1 className="popular-heading-secondary">
          <span>Most Popular Items</span>
        </h1>
        <br />
        {menuData.map((data, i) => (
          <ListItem
            key={i}
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default OurMostPopular;
