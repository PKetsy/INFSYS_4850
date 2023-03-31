import React from 'react';
import MenuImage from '../../components/MenuImage/MenuImage';
import EventList from '../../../src/pages/Events/components/EventList';
import Eventhero from '../../assets/Eventhero.jpg';
import './EventHome.css';

const DUMMY_EVENTS = [
  {
    id: 'p1',
    title: 'Alaska Fishing Trip',
    date: 'April 1-8, 2023',
    description: 'Wild Alaska Salmon, Halibut, Herring, Pollock',
    imageUrl:
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/339105550_765490488219223_5463839056538753659_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PbbbZeY7Vf0AX-qT-a3&_nc_ht=scontent-ord5-2.xx&oh=00_AfBlE0CYZGHenRXjp6RZKSvXPexr2khPIdxa7TSqMXFY_Q&oe=642BB008',
    creator: 'u1',
  },

  {
    id: 'p2',
    title: 'Louisiana Crawfish',
    date: 'April 5-12, 2023',
    description:
      'Big fat crawdads ready for a cajun boil!  Sold by the sack, or by the pound!!',
    imageUrl:
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/337989910_216942054253914_27463090514287716_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=591O-rdnIEAAX_qjtrS&_nc_ht=scontent-ord5-2.xx&oh=00_AfDiQ8wDkMdn8sMYU6jSngHUhB96jNm1De5jgBdiUzhCdA&oe=642C3806',
    creator: 'u2',
  },
];

const EventHome = () => {
  return (
    <div className="section">
      <MenuImage
        bgImage={Eventhero}
        heading={['Check out our events!']}
        text="We bring the most fresh quality productS from the coast, to YOU!"
      />
      <div className="container-grid-container">
        <div className="about-info-content">
          <h2 className="heading">
            <br></br>
            <span>Quick facts</span> about our Events!
          </h2>
          <br></br>
          <h4>1. Event items are sold by the pound.</h4>
          <h5>
            This can include fish filets, or shellfish. If you have questions
            about specific items for a certain event, please give our store a
            call at
            <b>
              <i>
                <u> 636-386-5050</u>
              </i>
            </b>
            .
          </h5>
          <br></br>
          <h4>
            2. Event orders can be submitted via our website, through our
            Facebook, or calling our store.
          </h4>
          <br></br>
          <h4>
            3. Orders over $100 will require a 50% down payment over the phone.
          </h4>
          <h5>
            If a large event order is placed via our website, a Fruit Stand &
            Seafood associate will contact you for the 50% down payment with the
            provided phone number from your order form.
          </h5>
          <br></br>
          <h4>
            4. Once the Event food items reach our store,
            <u> customers are required to pick up their orders in store.</u>
          </h4>
          <h5>
            <span>
              <b>
                <u>WE DO NOT OFFER DELIVERY SERVICE FOR ANY EVENT ITEMS!!</u>
              </b>
            </span>
          </h5>
        </div>
      </div>
      <div>
        <br></br>
        <h2 className="heading_two">Current Events</h2>
        <EventList items={DUMMY_EVENTS} />
      </div>
    </div>
  );
};

export default EventHome;
