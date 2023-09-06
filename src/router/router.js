import {createBrowserRouter} from 'react-router-dom';

import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import AboutMe from '../pages/AboutMe/AboutMe';
import Post from '../pages/Post/Post';

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
                element: <AboutMe />
            },
            {
                path: "oferta/:title",
                element: <Post />
            }
        ]
    }  
]);

 export default router;