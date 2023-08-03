import React, { ChangeEvent, useState } from 'react';

interface NewNoteInputProps {
    addNote(note: String): void;
}
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState("");

    const UpdateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }
    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }
    return (
        <>
            <input type='text' onChange={UpdateNote} value={note} name='note' placeholder='Note' />
            <button onClick={onAddNoteClick}>Add note</button>
        </>
    )
}