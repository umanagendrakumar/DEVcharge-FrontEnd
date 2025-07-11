import { createSlice } from "@reduxjs/toolkit";

const requestsSentSlice = createSlice({
    name: "requestsSent",
    initialState: null,
    reducers: {
        addRequestsSent: (state, action) => {
            return action.payload;
        },
        removeRequestsSent: (state, action) => {
            return null;
        }
    }
});

export const { addRequestsSent, removeRequestsSent } = requestsSentSlice.actions;
export default requestsSentSlice.reducer;