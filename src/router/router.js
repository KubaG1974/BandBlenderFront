import {createBrowserRouter} from 'react-router-dom';

import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact'; 
import Messages from "../pages/Messages/Messages"
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings'
import BandCreator from '../pages/BandCreator/BandCreator'
import Invitations from '../pages/Invitations/Invitations'
import Privatepolice from '../pages/Privatepolice/Privacypolicy'
import Login from '../components/Auth/Login';
import Band from "../pages/Band/Band";
import Band1 from "../pages/Band1/Band1";




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
            {
                path: "band",
                element: <Band />
            },
            {
                path: "band1",
                element: <Band1 />
            }
          
           
           
        ]
    }  
]);

 export default router;