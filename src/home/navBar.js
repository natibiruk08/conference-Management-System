import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import logo from './image/aastul.png';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import "./css/nav.css"

const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    const localUser = JSON.parse(localStorage.getItem('User')) || null;
    let [user, setUser] = useState(localUser);

    const isActive = (history, path) => {
        if (history.location.pathname === path) {
            return { color: "#F8F8FA" }
        } else {
            return { color: "#E0DFE9" }
        }


    };

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('User')));
        console.log("data " + user);

    }, [location]);



    const logOut = () => {
        localStorage.clear();

        setUser(null);
        window.location.replace('http://localhost:1234')
    }
    return (
        <div data-testid="nav-1 row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="30" height="30" />
                        <span className="aastu">AASTU CMS</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="top">
                        <ul className="navbar-nav ">


                            {user ? (
                                <>
                                    {user.type == "Presenter" &&
                                        <>
                                            (
                                            {/* With WorkShop Conductor Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/')} to="/">HOME</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conferences')} to="/Conferences">UPCOMING CONFERENCES</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conference/my')} to="/Conference/my">REGISTERED CONFERENCE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conference/registration')} to="/Conference/registration">CONFERENCE REGISTRATION</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conference-template-download')} to="/Conference-template-download">DOWNLOAD TEMPLATE</Link>
                                            </li>

                                            )
                                        </>}

                                    {user.type == "Attendee" &&
                                        <>
                                            (
                                            {/* With Attendee Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/')} to="/">HOME</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conferences')} to="/Conferences">CONFERENCE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conference-attendee')} to="/Conference-attendee">My Conference</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/Conference-attendee/registration')} to="/Conference-attendee/registration">Conference Registration</Link>
                                            </li>


                                            )
                                        </>}

                                    {user.type == "Admin" &&
                                        <>
                                            (
                                            {/* With Admin Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/admin')} to="/admin">DASHBOARD</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/admin/Conference')} to="/admin/Conference">CONFERENCE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/admin/attendee-Conference')} to="/admin/attendee-Conference">CONFERENCE ATTENDEE</Link>
                                            </li>


                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/user-details')} to="/user-details">USERS</Link>
                                            </li>
                                            )
                                        </>}

                                    {user.type == "Editor" &&
                                        <>
                                            (
                                            {/* With Editor Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/editor')} to="/editor">DASHBOARD</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/create-conference')} to="/create-conference">CREATE CONFERENCE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/create-speaker')} to="/create-speaker">CREATE SPEAKER</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/create-topic')} to="/create-topic">CREATE TOPIC</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/manage-conference')} to="/manage-conference">MANAGE CONFERENCE</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/manage-speaker')} to="/manage-speaker">MANAGE SPEAKER</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/manage-topics')} to="/manage-topics">MANAGE TOPICS</Link>
                                            </li>

                                            )
                                        </>}

                                    {user.type == "Researcher" &&
                                        <>
                                            (
                                            {/* With Researcher Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/')} to="/">HOME</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/researcher')} to="/researcher">RESEARCHER</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/research-paper')} to="/research-paper">RESEARCH PAPERS</Link>
                                            </li>
                                            )
                                        </>}

                                    {user.type == "Reviewer" &&
                                        <>
                                            (
                                            {/* With Reviewer Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/')} to="/">HOME</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/review-Conference')} to="/review-Conference">CONFERENCES</Link>
                                            </li>

                                            )
                                        </>}

                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/')} to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/Conferences')} to="/Conferences">UPCOMING CONFERENCE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/view')} to="/view">MAIN CONFERENCE</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/about-us')} to="/about-us">ABOUT US</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/contact-us')} to="/contact-us">CONTACT US</Link>
                                    </li>
                                </>
                            )}
                        </ul>

                    </div>
                    {user ? (

                        <>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="m-1">
                                    <p style={{ color: '#ffffff' }}><i className='fa fa-user-alt mr-6'></i> &nbsp;{user.email} &nbsp;</p>
                                </li>
                                <li>
                                    <button className="btn btn-danger" onClick={logOut}><i className="fa fa-power-off "></i> LOG OUT </button>

                                </li>
                            </ul>
                        </>
                    ) :
                        <>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link className='signup' style={{ textDecoration: 'none' }} className="btn btn-warning " to="/registration" ><i className="fa fa-user-plus "></i> REGISTER </Link> &nbsp; &nbsp;
                                    <Link style={{ textDecoration: 'none' }} className="btn btn-primary" to="/signin" ><i className="fa fa-sign-in-alt"></i> LOG IN </Link>
                                </li>
                            </ul>
                        </>
                    }
                </div>
            </nav>
        </div>

    )
}

export default Navbar
