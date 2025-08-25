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
import Chat from "./pages/Chat";
import Feedback from "./pages/Feedback";

const App = () => {
    return (
        <Provider store={appStore}>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Body />}>

                        <Route path="/" element={<LandingPage />} />
                        <Route path="/auth" element={<Login />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/profile/edit" element={<Profile />} />
                        <Route path="/user/connections" element={<Connections />} />
                        <Route path="/user/requests" element={<Requests />} />
                        <Route path="/user/request/sent" element={<RequestsSent />} />
                        <Route path="/user/ignoredProfiles" element={<IgnoredProfiles />} />
                        <Route path="/chat/:targetUserId" element={<Chat />} />
                        <Route path="/feedback" element={<Feedback />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;