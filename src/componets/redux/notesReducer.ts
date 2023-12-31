import { Action } from "../action/action"
export interface NotesState {
    notes: string[]
}
const initailState = {
    notes: []
}

export const notesReducer = (state: NotesState = initailState, action: Action) => {
    switch (action.type) {
        case "ADD_NOTE": {
            return { ...state, notes: [...state.notes, action.payload] }
        };
        default:
            return state
    }
}