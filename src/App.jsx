import { BrowserRouter, Route, Routes } from "react-router-dom";

import appStore from "./utils/store/appStore";
import { Provider } from "react-redux";

import Login from "./pages/Login";
import Body from "./components/Body";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";
import RequestsSent from "./pages/RequestsSent";
import IgnoredProfiles from "./pages/IgnoredProfiles";
import LandingPage from "./pages/LandingPage";
import { PublicOnlyRoute } from "./Helpers";

const App = () => {
    return (
        <Provider store={appStore}>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Body />}>
                        <Route path="/" element={
                            <PublicOnlyRoute>
                                <LandingPage />
                            </PublicOnlyRoute>
                        }></Route>
                        <Route path="/feed" element={<Feed />}></Route>
                        <Route path="/auth" element={
                            <PublicOnlyRoute>
                                <Login />
                            </PublicOnlyRoute>
                        }></Route>
                        <Route path="/profile/edit" element={<Profile />}></Route>
                        <Route path="/user/connections" element={<Connections />}></Route>
                        <Route path="/user/requests" element={<Requests />}></Route>
                        <Route path="/user/request/sent" element={<RequestsSent />}></Route>
                        <Route path="/user/ignoredProfiles" element={<IgnoredProfiles />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;