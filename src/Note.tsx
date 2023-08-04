import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewNoteInput } from './screen/NewNoteInput';
import { NotesState } from './componets/redux/notesReducer';
import { addNote } from './componets/action/action';

export const Note = () => {
    const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
    const dispatch = useDispatch();
    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ margin: 'auto' }}>
                <NewNoteInput addNote={onAddNote} />
                <ul>
                    {notes.map((note: string) => {
                        return <li style={{ fontSize: '20px' }} key={note}>{note}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}
