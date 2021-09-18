import React from 'react'
import { Link } from "react-router-dom";
import logo from './Newsium - Logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} style={{ width: "70px", height: "35px" }} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/" >About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" >
                                    <li><Link className="dropdown-item text-light" style={{ opacity: 0.75 }} to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item text-light" style={{ opacity: 0.75 }} to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item text-light" style={{ opacity: 0.75 }} to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item text-light" style={{ opacity: 0.75 }} to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item text-light" style={{ opacity: 0.75 }} to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item text-light" style={{ opacity: 0.75 }} to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/" >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
