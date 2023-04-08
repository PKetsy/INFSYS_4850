// Load env variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');

//create express app
const app = express();

//configure express app
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//connect to DB
connectToDb();

//routing
app.post('/admin/signup', usersController.signup);
app.post('/admin/login', usersController.login);
app.get('/admin/logout', usersController.logout);
app.get('/admin/check', requireAuth, usersController.checkAuth);

app.get('/admin', requireAuth, notesController.fetchNotes);
app.get('/admin/:id', requireAuth, notesController.fetchNote);
app.post('/admin', requireAuth, notesController.createNote);
app.put('/admin/:id', requireAuth, notesController.updateNote);
app.delete('/admin/:id', requireAuth, notesController.deleteNote);

//Start server
app.listen(process.env.PORT);
