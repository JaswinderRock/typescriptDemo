import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { NewNoteInput } from './componets/class/NewNoteInput';
import { NotesState } from './componets/class/notesReducer';
import { addNote } from './componets/class/action';
// import { Counter } from './componets/class/Counter';


function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    // <div className="App">
    //   <Counter message={`The Count Value is `} />
    // </div>
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
