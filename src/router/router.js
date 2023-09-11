import {createBrowserRouter} from 'react-router-dom';

import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact'; 
import AboutUs from '../pages/Aboutus/About';
import Messages from "../pages/Messages/Messages"
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings'
import BandCreator from '../pages/BandCreator/BandCreator'
import Invitations from '../pages/Invitations/Invitations'
import Privatepolice from '../pages/Privatepolice/Privacypolicy'
import Login from '../components/Auth/Login';



const router = createBrowserRouter([
    {
        path: "/",
         element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about-me",
                element: <AboutUs />
            },
            {
                path: "Messages",
                element: <Messages />
            },
            {
                path: "Profile",
                element: <Profile />
            },
            {
                path: "Invitations",
                element: <Invitations />
            },
            {
                path: "Create-band",
                element: <BandCreator />
            },
            {
                path: "Settings",
                element: <Settings />
            },
            {
                path: "Settings",
                element: <Settings />
            },
            {
                path: "Private-police",
                element: <Privatepolice />
            },
            {
                path: "login",
                element: <Login />
            },
           
           
        ]
    }  
]);

 export default router;