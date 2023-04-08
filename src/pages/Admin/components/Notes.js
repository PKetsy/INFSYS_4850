import { useEffect } from 'react';
import notesStore from '../stores/notesStore';
import Note from './Note';

export default function Notes() {
  const store = notesStore((state) => ({
    notes: state.notes,
    fetchNotes: state.fetchNotes,
  }));

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <main>
          <h2>My Events:</h2>
          {store.notes &&
            store.notes.map((note) => {
              return <Note note={note} key={note._id} />;
            })}
        </main>
      </div>
    </div>
  );
}
