import { createStore } from 'redux';
import { notesReducer } from "../redux/notesReducer";
// import { cakeReducer } from '../redux/cakeReducer';

export const store = createStore(notesReducer)
// export const store = createStore(cakeReducer)
