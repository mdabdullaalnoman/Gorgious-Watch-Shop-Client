import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from '../media/logo.png';
import './Navbar.css';

const Navbar = () => {

    const { handleSignOut, user } = useAuth();
    console.log(user.email);
    // toggle active class on menubar-------------------------------
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }
    return (

        <header id="home">
            <div className="header-2">
                {/* Header ---- 2 */}

                <Link to="/home" className="logo">
                    <img src={logo} alt="" />
                </Link>

                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
                </form>

            </div>

            <div className="header-3">
                {/* Header - 3 */}

                <div id="menu-bar" onClick={toggleClass} className={isActive ? 'fas fa-times' : 'fas fa-bars'}></div>

                <nav className={isActive ? 'navbar active' : 'navbar'}>
                    <Link to="/home">Home</Link>
                    {
                        user.email
                            ?
                            <>
                                <Link to="/login" onClick={handleSignOut}>Logout</Link>
                                <Link to="/dashboard">Dashboard</Link>
                            </>
                            : <Link to="/login">Login</Link>
                    }

                </nav>

                <div className="icons">
                    <Link to="/home" className="fas fa-shopping-cart"></Link>
                    <Link to="/home" className="fas fa-heart"></Link>
                    <Link to="/home" className="fas fa-user-circle"></Link>
                    <Link to="/home">{user.displayName}</Link>
                </div>
            </div>

        </header>
    );
};

export default Navbar;