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
            <input type='text' style={{ marginTop: '20px', fontSize: '20px', padding: ' 8px', borderRadius: '4px' }} onChange={UpdateNote} value={note} name='note' placeholder='Enter your note name' />
            <br />
            <button style={{ display: 'flex', margin: 'auto', textAlign: 'center', marginTop: '20px', color: "white", background: 'blue', padding: '8px', fontSize: '24px', borderRadius: '4px' }} onClick={onAddNoteClick}>Add note</button>
        </>
    )
}