const { createSlice } = require("@reduxjs/toolkit");

export const charactersSlice = createSlice({
    name: 'character',
    initialState: {
        data: [],
        character: {}
    },
    reducers: {
        addCharacters(state, action) {
            return {...state, data: action.payload}
        }
    }
});

export const { addCharacters } = charactersSlice.actions;