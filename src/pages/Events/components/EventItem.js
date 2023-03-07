import React, { useState } from 'react';

import Card from '../../../components/UIElements/Card';
import Button from '../../../components/Buttons/FormButton';
import Modal from '../../../components/UIElements/Modal';
import './EventItem.css';

const EventItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.title}
        contentClass="event-item__modal-content"
        footerClass="event-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>CLOSE</Button>}
      >
        <div className="form-container">
          <h2>THE FORM</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openModalHandler}>
              RSVP
            </Button>
            <Button to={`/events/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default EventItem;
