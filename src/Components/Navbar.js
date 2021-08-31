import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Newsium</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/" >Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/" >About</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarDropdown" >
                                <li><a className="dropdown-item" href="/">Business</a></li>
                                <li><a className="dropdown-item" href="/">Entertainment</a></li>
                                <li><a className="dropdown-item" href="/">Finance</a></li>
                                <li><a className="dropdown-item" href="/">Science</a></li>
                                <li><a className="dropdown-item" href="/">Sports</a></li>
                                </ul>
                            </li>        
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/" >Contact Us</a>
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
