import React from 'react';

const Project = (props) => {
    return (
        <div className='card m-3'>
            <p className='is-size-3'>{props.name}</p>
            <img src={props.projPic} alt={props.name} className='image' />
            <a href={props.repoURL} target="_blank" rel="noreferrer" className='button is-primary m-1'>Git Hub Repo</a>
            <br></br>
            <a href={props.deployURL} target="_blank" rel="noreferrer" className='button is-primary m-1'>Deployed App</a>
        </div>
    );
};

export default Project;