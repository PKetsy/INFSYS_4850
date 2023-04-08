// using a store from ZUSTAND

import create from 'zustand';
import axios from 'axios';

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    image: null,
    eventItems: [
      {
        itemName: '',
        itemPrice: '',
      },
    ],
  },

  updateForm: {
    _id: null,
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    image: null,
    eventItems: [
      {
        itemName: '',
        itemPrice: '',
      },
    ],
  },

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get('http://localhost:5000/admin');

    // Set to state
    set({
      notes: res.data.notes,
    });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  updateCreateFormEventItem: (index, name, value) => {
    set((state) => {
      const eventItems = state.createForm.eventItems.slice();
      eventItems[index] = {
        ...eventItems[index],
        [name]: value,
      };
      return {
        createForm: {
          ...state.createForm,
          eventItems,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes } = notesStore.getState();

    console.log('eventItems:', createForm.eventItems);

    try {
      const res = await axios.post('http://localhost:5000/admin', createForm);

      console.log('res.data', res.data);

      set({
        notes: [...notes, res.data.note],
        createForm: {
          title: '',
          startDate: '',
          endDate: '',
          description: '',
          image: null,
          eventItems: [
            {
              itemName: '',
              itemPrice: '',
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error creating note:', error);
    }
  },

  deleteNote: async (_id) => {
    // Delete the note
    const res = await axios.delete(`http://localhost:5000/admin/${_id}`);

    const { notes } = notesStore.getState();

    // Update state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });

    set({ notes: newNotes });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({
    _id,
    title,
    startDate,
    endDate,
    description,
    image,
    eventItems,
  }) => {
    set({
      updateForm: {
        _id,
        title,
        startDate,
        endDate,
        description,
        image,
        eventItems,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {
      updateForm: {
        _id,
        title,
        startDate,
        endDate,
        description,
        image,
        eventItems,
      },
      notes,
    } = notesStore.getState();

    // Send update request
    const res = await axios.put(`http://localhost:5000/admin/${_id}`, {
      title,
      startDate,
      endDate,
      description,
      image,
      eventItems,
    });

    // Update the state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        image: null,
        eventItems: [
          {
            itemName: '',
            itemPrice: '',
          },
        ],
      },
    });
  },
}));

export default notesStore;
