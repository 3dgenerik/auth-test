import React from "react";
import { Link, Outlet } from "react-router-dom";
import './navbar.style.scss'

export const Navbar = ()=>{

    return (
        <div className="">
            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link to='/' className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to='/login' className="nav__link">Login</Link></li>
                    <li className="nav__item"><Link to='/register' className="nav__link">Register</Link></li>
                </ul>
            </div>
            <div className="outlet-container">
                <Outlet/>
            </div>
        </div>
    )
}