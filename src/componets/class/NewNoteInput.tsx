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
            <input type='text' onChange={UpdateNote} value={note} name='note' placeholder='Enter your note name' />
            <br />
            <button style={{ marginTop: '10px', color: "white", background: 'blue', height: '3vh' }} onClick={onAddNoteClick}>Add note</button>
        </>
    )
}

// import React, { ChangeEvent, Component } from 'react';

// interface NewNoteInputProps {
//     addNote(note: String): void;
// }
// export class NewNoteInput extends Component<NewNoteInputProps>{
//     state = {
//         note: 0,
//     }
//     UpdateNote = (event: ChangeEvent<HTMLInputElement>) => {
//         this.setState(event.target.value)
//     }
//     onAddNoteClick = () => {
//         this.props.addNote(note)
//         this.setState("")
//     }
//     render() {
//     return (
//         <>
//             <input type='text' onChange={this.UpdateNote} value={note} name='note' placeholder='Note' />
//             <button onClick={this.onAddNoteClick}>Add note</button>
//         </>
//     )
//     }
// }