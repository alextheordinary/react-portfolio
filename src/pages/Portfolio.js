import React from 'react';
import Project from '../components/Project';


const Portfolio = () => {
    return (
        <div>
            <Project
                name='NewsHound News Aggregator'
                repoURL='https://github.com/alextheordinary/news-hound'
                deployURL='https://serene-plateau-74924.herokuapp.com/'
            />
        </div>
    );
};

export default Portfolio;