import { useState } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./CSS/Signup.css"

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState('');
    const [projects, setProjects] = useState('');
    const [skills, setSkills] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectList = projects.split(',').map(project => project.trim());
        const skillList = skills.split(',').map(skill => skill.trim());
        axios.post('http://localhost:3001/register', { name, email, password, about, projects: projectList, skills: skillList })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="R1">
            <div className="R2">
                <h2>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="R3">
                        <label htmlFor="name">
                            <strong>Name:</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="R4">
                        <label htmlFor="email">
                            <strong>Email:</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="R5">
                        <label htmlFor="password">
                            <strong>Password:</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="R6">
                        <label htmlFor="about">
                            <strong>About:</strong>
                        </label>
                        <textarea
                            placeholder="About Yourself"
                            autoComplete="off"
                            name="about"
                            className="form-control rounded-0"
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    <div className="R7">
                        <label htmlFor="projects">
                            <strong>Projects:</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Comma separated project list"
                            autoComplete="off"
                            name="projects"
                            className="form-control rounded-0"
                            onChange={(e) => setProjects(e.target.value)}
                        />
                    </div>
                    <div className="R8">
                        <label htmlFor="skills">
                            <strong>Skills:</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Comma separated skills list"
                            autoComplete="off"
                            name="skills"
                            className="form-control rounded-0"
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="Reg">Register</button>
                </form>
                <p>Already Have an Account?</p><Link to="/login" className="log">Login</Link>
            </div>
        </div>
    );
}

export default Signup;
