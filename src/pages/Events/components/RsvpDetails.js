import React, { useState } from 'react';
import Card from '../../../components/UIElements/Card';
import Button from '../../../components/Buttons/FormButton';
import './EventItem.css';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  item: {
    marginBottom: '20px',
  },
}));

const RsvpDetails = (props) => {
  const history = useHistory();
  const classes = useStyles();
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
                history.push(`/events/${props.id}`);
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
        <form className={classes.root} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Items:</Typography>
              {props.items.map((item, index) => (
                <Grid container alignItems="center" spacing={2} key={index}>
                  <Grid item xs={8} sm={9}>
                    <Typography>{item.name}</Typography>
                  </Grid>
                  <Grid item xs={4} sm={3}>
                    <div className={classes.quantity}>
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
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit RSVP
              </Button>
              <Button to={`/events`}>CANCEL</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default RsvpDetails;
