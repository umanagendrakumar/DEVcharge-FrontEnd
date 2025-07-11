import { createSlice } from "@reduxjs/toolkit";

const ignoredProfilesSlice = createSlice({
    name: "ignoredProfiles",
    initialState : null,
    reducers: { 
        addIgnoredProfiles : (state, action) => {
            return action.payload;
        },
        removeIgnoredProfiles : (state, action) => {
            return null;
        }
    }
});

export const { addIgnoredProfiles, removeIgnoredProfiles } = ignoredProfilesSlice.actions;
export default ignoredProfilesSlice.reducer;