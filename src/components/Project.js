import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <a href={props.repoURL} target="_blank">Git Hub Repo</a>
            <a href={props.deployURL} target="_blank">Deployed App</a>
        </div>
    );
};

export default Project;