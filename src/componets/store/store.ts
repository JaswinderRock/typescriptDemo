import { createStore } from 'redux';
import { notesReducer } from "../redux/notesReducer";

export const store = createStore(notesReducer)
