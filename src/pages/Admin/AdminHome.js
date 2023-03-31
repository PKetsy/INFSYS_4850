import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHome = () => {
  // State
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: '',
    body: '',
  });

  // Use Effect
  useEffect(() => {
    fetchNotes();
  }, []);

  // Functions
  const fetchNotes = async () => {
    // Fetch the notes
    const res = await axios.get('http://localhost:5000/notes');

    // Set to state
    console.log(res);
    setNotes(res.data.notes);
    console.log(res);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault();

    // Create the note
    const res = await axios.post('http://localhost:5000/notes', createForm);

    // Update the state
    setNotes([...notes, res.data.note]);

    // Clear form state
    setCreateForm({ title: '', body: '' });
  };

  const deleteNote = async (_id) => {
    // Delete the note
    const res = await axios.delete(`http://localhost:5000/notes/${_id}`);

    // Update state
    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNotes);
  };

  return (
    <div className="section">
      <div className="container">
        <main>
          <h4>Testing Notes</h4>
          {notes &&
            notes.map((note) => {
              return (
                <div key={note._id}>
                  <h3>{note.title}</h3>
                  <button onClick={() => deleteNote(note._id)}>
                    Delete a note
                  </button>
                </div>
              );
            })}
        </main>
      </div>
      <div>
        <h2>Create a note</h2>
        <form onSubmit={createNote}>
          <input
            onChange={updateCreateFormField}
            value={createForm.title}
            name="title"
            placeholder="Note Title"
          />
          <textarea
            onChange={updateCreateFormField}
            value={createForm.body}
            name="body"
            placeholder="Note Description"
          />
          <button type="submit">CREATE NOTE</button>
        </form>
      </div>
    </div>
  );
};

export default AdminHome;
