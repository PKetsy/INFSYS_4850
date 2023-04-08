const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  startDate: String,
  endDate: String,
  description: String,
  image: String,
  eventItems: [
    {
      itemName: String,
      itemPrice: String,
    },
  ],
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
