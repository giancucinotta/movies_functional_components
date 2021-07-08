import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}