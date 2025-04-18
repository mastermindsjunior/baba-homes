import { createBrowserRouter } from 'react-router-dom';

// Home Layouts
import HomeLayout from '../Layouts/HomeLayout';
import About from '../Pages/About';
import ContactPage from '../Pages/ContactPage';
import FAQ from '../Pages/FAQ';
import Home01 from '../Pages/Homes/Home01';
import ProjectDetails from '../Pages/Projects/ProjectDetails';
import Projects01 from '../Pages/Projects/Projects01';
import Projects02 from '../Pages/Projects/Projects02';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Services01 from '../Pages/Services/Services01';
import Services02 from '../Pages/Services/Services02';
import TeamPage from '../Pages/TeamPage';

// Home Layouts02
import HomeLayout02 from '../Layouts/HomeLayout02';
import Home02 from '../Pages/Homes/Home02';

// Shop Layouts

// Shared Layouts
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import EditorLogin from '../Pages/EditorLogin/EditorLogin';
import Services04 from '../Pages/Services/Services04';
import Blog from '../Containers/Blogs/Blog';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: '/',
                element: <Home01/>
            },
            {
                path: '/project',
                element: <Projects01/>
            },
            {
                path: '/project-2',
                element: <Projects02/>
            },
            {
                path: '/project-details',
                element: <ProjectDetails/>
            },
            // {
            //     path: '/residentials',
            //     element: <Services01/>
            // },
            // {
            //     path: '/commercials',
            //     element: <Services04/>
            // },
            {
                path: '/residential',
                element: <Services02/>
            },
            {
                path: '/commercial',
                element: <Services02/>
            },
            {
                path: '/service-details',
                element: <ServiceDetails/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/team',
                element: <TeamPage/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '/blogs',
                element: <Blog/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    },
    // {
    //     path: '/editorLogin',
    //     element: <EditorLogin/>
    // },
    {
        path: "/",
        element: <HomeLayout02/>,
        children: [
            {
                path: '/home-2',
                element: <Home02/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    },

])

