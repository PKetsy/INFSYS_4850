import React, { useEffect } from 'react';
import notesStore from '../stores/notesStore';
import './Note.css';
import Card from '../../../components/UIElements/Card';

export default function NotesList() {
  const store = notesStore((state) => ({
    notes: state.notes,
    fetchNotes: state.fetchNotes,
  }));

  useEffect(() => {
    store.fetchNotes();
  }, [store]);

  return (
    <div>
      {store.notes?.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
}

function Note({ note }) {
  const store = notesStore((state) => ({
    deleteNote: state.deleteNote,
    toggleUpdate: state.toggleUpdate,
    handleUpdate: (updatedNote) => state.updateNote(note.__id, updatedNote),
  }));

  const handleDelete = () => {
    store.deleteNote(note._id);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    store.toggleUpdate(note);
  };

  return (
    <form onSubmit={handleUpdate}>
      <Card className="form-container">
        <div className="form-group">
          <div key={note._id}>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              type="text"
              onChange={(event) =>
                store.handleUpdate({ ...note, title: event.target.value })
              }
              value={note.title}
              name="title"
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date: </label>
            <input
              id="startDate"
              type="date"
              onChange={(event) =>
                store.handleUpdate({ ...note, startDate: event.target.value })
              }
              value={note.startDate}
              name="startDate"
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date: </label>
            <input
              id="endDate"
              type="date"
              onChange={(event) =>
                store.handleUpdate({ ...note, endDate: event.target.value })
              }
              value={note.endDate}
              name="endDate"
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              onChange={(event) =>
                store.handleUpdate({ ...note, description: event.target.value })
              }
              value={note.description}
              name="description"
            />
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input
              id="image"
              className="image_box"
              type="file"
              onChange={handleUpdate}
              name="image"
            />
          </div>
          <div>
            <label htmlFor="itemName">Item Name: </label>
            <input
              id="itemName"
              type="text"
              onChange={(event) =>
                store.handleUpdate({
                  ...note,
                  eventItems: [
                    { ...note.eventItems[0], itemName: event.target.value },
                  ],
                })
              }
              value={note.eventItems[0].itemName}
              name="itemName"
            />
          </div>
          <div>
            <label htmlFor="itemPrice">Item Price: </label>
            <input
              id="itemPrice"
              type="text"
              onChange={(event) =>
                store.handleUpdate({
                  ...note,
                  eventItems: [
                    { ...note.eventItems[0], itemPrice: event.target.value },
                  ],
                })
              }
              value={note.eventItems[0].itemPrice}
              name="itemPrice"
            />
          </div>
          <br />
          <div className="button-container">
            <button type="submit">Update</button>
            <button type="submit" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Card>
    </form>
  );
}
