import {createBrowserRouter} from 'react-router-dom';

import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact'; 
import AboutUs from '../pages/Aboutus/About';


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
           
           
        ]
    }  
]);

 export default router;