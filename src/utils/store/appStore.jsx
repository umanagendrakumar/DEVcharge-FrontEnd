import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsReducer from "./connectionsSlice";
import requestsReducer from "./requestsSlice";
import requestsSentReducer from "./requestsSentSlice";
import ignoredProfilesReducer from "./ignoredProfilesSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionsReducer,
        requests: requestsReducer,
        requestsSent: requestsSentReducer,
        ignoredProfiles: ignoredProfilesReducer,
    }
});

export default appStore;
