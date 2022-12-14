import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../Components/AboutMe/AboutMe";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import Project from "../Components/Project/Project";
import ProjectsDetails from "../Components/Project/ProjectsDetails";
import Project1 from "../Components/Projects/Project1";
import Project2 from "../Components/Projects/Project2";
import Project3 from "../Components/Projects/Project3";
import Projects from "../Components/Projects/Projects";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
          
            // {
            //     path: '/',
            //     element: <Projects></Projects>,
            //     // loader: () =>{
            //     //      fetch(`projects.json`)
            //     // }
            // },
            {
                path: '/project/1',
                element: <Project1></Project1>,
              
            },
            {
                path: '/project/2',
                element: <Project2></Project2>,
              
            },
            {
                path: '/project/3',
                element: <Project3></Project3>,
              
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
              
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>,
              
            },
            // {
            //     path: '/project/:project',
            //     element: <ProjectsDetails ></ProjectsDetails>,
            //     loader:(params) => fetch(`projects.json/project/${params.project}`)
            // }
        ]
    }
])