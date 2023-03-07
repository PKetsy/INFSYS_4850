import React from 'react';

import Card from '../../../components/UIElements/Card';
import EventItem from './EventItem';
import './EventList.css';

const EventList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="event-list center">
        <Card>
          <h2>No events found. Please check back later.</h2>
          <button>RSVP</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="event-list">
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.imageUrl}
          title={event.title}
          description={event.description}
          creatorId={event.creator}
        />
      ))}
    </ul>
  );
};

export default EventList;
