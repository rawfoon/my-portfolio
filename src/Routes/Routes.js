import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Project from "../Components/Project/Project";
import ProjectsDetails from "../Components/Project/ProjectsDetails";
import Project1 from "../Components/Projects/Project1";
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
          
            {
                path: '/',
                element: <Projects></Projects>,
                // loader: () =>{
                //      fetch(`projects.json`)
                // }
            },
            {
                path: '/project/1',
                element: <Project1></Project1>,
              
            },
            {
                path: '/project/:project',
                element: <ProjectsDetails ></ProjectsDetails>,
                loader:(params) => fetch(`projects.json/project/${params.project}`)
            }
        ]
    }
])