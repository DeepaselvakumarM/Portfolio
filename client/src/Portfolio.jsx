import React, { useContext } from 'react';
import { UserContext } from './App';
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import './CSS/Portfolio.css'

function Portfolio() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navigation /> 
            <Hero />
        
            <div className="P-C">
                <h2>{user.name}'s Portfolio</h2>
                <p><strong>About:</strong> <br /> {user.about}</p>
                <p><strong>Projects:</strong></p>
                <ul>
                    {user.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
                <p><strong>Skills:</strong></p>
                <ul>
                    {user.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>   
            
             <About />
        
        </div>
    );
}

export default Portfolio;