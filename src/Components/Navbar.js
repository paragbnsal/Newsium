import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Newsium</Link>
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
                                <li><Link className="dropdown-item text-light" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item text-light" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="dropdown-item text-light" to="/health">Health</Link></li>
                                <li><Link className="dropdown-item text-light" to="/science">Science</Link></li>
                                <li><Link className="dropdown-item text-light" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item text-light" to="/technology">Technology</Link></li>
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
}

export default Navbar
