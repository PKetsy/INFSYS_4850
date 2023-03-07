import React from 'react';
import MenuImage from '../../components/MenuImage/MenuImage';
import EventList from './components/EventList';

import Eventhero from '../../assets/Eventhero.jpg';

const DUMMY_EVENTS = [
  {
    id: 'p1',
    title: 'Alaska Fishing Trip',
    description: 'Wild Alaska Salmon, Halibut, Herring, Pollock',
    imageUrl:
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/330491155_5692951834144088_152069365433679627_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_uRHp0d5LJsAX-2LPJD&_nc_ht=scontent-ord5-1.xx&oh=00_AfANIQDJTiSKL7ROa7rrWIlKQcIzXxSqKlLSL1b9cQJeOg&oe=640C4A92',
    creator: 'u1',
  },

  {
    id: 'p2',
    title: 'Louisiana Crawfish',
    description:
      'Big fat crawdads ready for a cajun boil!  Sold by the sack, or by the pound!!',
    imageUrl:
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/334596884_1367426374033668_7133794271096531278_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Qzgnu4ybnjMAX--KwIN&_nc_ht=scontent-ord5-1.xx&oh=00_AfB247AeyjkIQIOvYmALI3dkA2v-l2gJwQic4ldN83-PDg&oe=640D28CA',
    creator: 'u2',
  },
];

const NewEvent = () => {
  return (
    <div className="section">
      <MenuImage
        bgImage={Eventhero}
        heading={['Check out our events!']}
        text="We bring the most fresh quality productS from the coast, to YOU!"
      />
      <div className="container-grid-container">
        <div className="about-info-content">
          <h2 className="heading-secondary">
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
      <EventList items={DUMMY_EVENTS} />
    </div>
  );
};

export default NewEvent;
