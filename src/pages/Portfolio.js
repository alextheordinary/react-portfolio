import React from 'react';
import Project from '../components/Project';
import proj1 from '../images/project-1.png';
import proj2 from '../images/project-2.png';


const Portfolio = () => {
    return (
        <div>
            <Project
                name='NewsHound News Aggregator'
                projPic={proj1}
                repoURL='https://github.com/alextheordinary/news-hound'
                deployURL='https://serene-plateau-74924.herokuapp.com/'
            />
            <Project
                name='Star Wars Planet Crawl Trivia'
                projPic={proj2}
                repoURL='https://github.com/alextheordinary/star-wars-planet-crawl'
                deployURL='https://alextheordinary.github.io/star-wars-planet-crawl/"'
            />
        </div>

    );
};

export default Portfolio;