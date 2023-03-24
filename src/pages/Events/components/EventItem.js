import React, { useState } from 'react';
import Card from '../../../components/UIElements/Card';
import Button from '../../../components/Buttons/FormButton';
import './EventItem.css';
import { useNavigate } from 'react-router-dom';

// import { redirect } from 'react-router-dom';
import RsvpDetails from './RsvpDetails';

const EventItem = (props) => {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  // Assume isAdmin is a boolean indicating whether the user is an admin
  const isAdmin = true; // Set this to the actual value based on your authentication system

  const handleRsvpClick = () => {
    setShowForm(true);
  };

  return (
    <React.Fragment>
      <li className="event-item">
        <Card className="event-item__content">
          <div className="event-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="event-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <div className="event-item__actions">
            <Button onClick={handleRsvpClick}>RSVP</Button>
            {/* <Button
              onClick={() => {
                redirect(`/events/${props.id}`);
              }}
            >
              RSVP
            </Button> */}
            {isAdmin && ( // Only render the following buttons if the user is an admin
              <React.Fragment>
                <Button to={`/events/${props.id}`}>EDIT</Button>
                <Button danger>DELETE</Button>
              </React.Fragment>
            )}
          </div>
        </Card>
      </li>
      {showForm && <RsvpDetails title={props.title} />}
    </React.Fragment>
  );
};

export default EventItem;
