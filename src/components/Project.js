import React from 'react';

const Project = (props) => {
    return (
        <div className='card'>
            <p>{props.name}</p>
            <a href={props.repoURL} target="_blank" rel="noreferrer">Git Hub Repo</a>
            <br></br>
            <a href={props.deployURL} target="_blank" rel="noreferrer">Deployed App</a>
        </div>
    );
};

export default Project;