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
            <input type='text' style={{ height: '4vh' }} onChange={UpdateNote} value={note} name='note' placeholder='Enter your note name' />
            <br />
            <button style={{ marginTop: '10px', color: "white", background: 'blue', height: '4vh', width: '15%' }} onClick={onAddNoteClick}>Add note</button>
        </>
    )
}
