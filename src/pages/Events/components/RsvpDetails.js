import React, { useState } from 'react';
import Card from '../../../components/UIElements/Card';
import Button from '../../../components/Buttons/FormButton';
import './EventItem.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const RsvpDetails = (props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [items, setItems] = useState(
    props.items.map((item) => ({ ...item, quantity: 0 }))
  );

  const handleIncrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission
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
            <Button
              onClick={() => {
                navigate.push(`/events/${props.id}`);
              }}
            >
              RSVP
            </Button>

            {props.isAdmin && (
              <React.Fragment>
                <Button to={`/events/${props.id}`}>EDIT</Button>
                <Button danger>DELETE</Button>
              </React.Fragment>
            )}
          </div>
        </Card>
      </li>
      <Box component="div" m={2}>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <form
          style={{ margin: '10px', backgroundColor: '#eee' }}
          noValidate
          onSubmit={handleSubmit}
        >
          {/* <form className={classes.root} noValidate onSubmit={handleSubmit}> */}
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant="h6">Items:</Typography>
              {props.items.map((item, index) => (
                <Grid2 container alignItems="center" spacing={2} key={index}>
                  <Grid2 item xs={8} sm={9}>
                    <Typography>{item.name}</Typography>
                  </Grid2>
                  <Grid2 item xs={4} sm={3}>
                    <div style={{ marginBottom: '20px' }}>
                      {/* <div className={classes.quantity}> */}
                      <IconButton
                        aria-label="decrease quantity"
                        onClick={() => handleDecrement(index, -1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        aria-label="increase quantity"
                        onClick={() => handleIncrement(index, 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  </Grid2>
                </Grid2>
              ))}
            </Grid2>
            <Grid2 item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit RSVP
              </Button>
              <Button to={`/events`}>CANCEL</Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default RsvpDetails;
