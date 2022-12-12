import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {

    const porject = useLoaderData()
    console.log(porject);
    return (
        <div>
            this is project {porject.title}
            
        </div>
    );
};

export default ProjectsDetails;