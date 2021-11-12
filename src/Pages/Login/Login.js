
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loginInfo, setLoginInfo] = useState({});
    const { handleRegister, user, handleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    // console.log(user);
    // on submit form-----------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegisters();
        handleLogins();
    }

    // handle register------------------------------- 
    const handleRegisters = (e) => {
        handleRegister(loginInfo.email, loginInfo.password, loginInfo.name, history);
        alert('success full');
    }

    // handle Login -------------------------------------
    const handleLogins = (e) => {
        handleSignIn(loginInfo.email, loginInfo.password, location, history);
        alert('success full');
    }

    // get input value ----------------------------------------------
    const handleLogin = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...loginInfo };
        newUser[field] = value;
        setLoginInfo(newUser);
        console.log(newUser, field, value);
    }
    // toggle login and register--------------------------------------
    const handleLoginToggle = (e) => {
        setIsLogin(e.target.checked);
        console.log('clicked');
    }
    return (
        <div className="login-bg">
            <Navbar />
            <div className="form-warp">
                <div className="form-container">
                    <div className="log-in-head">
                        {/* <img src="https://i.imgur.com/h8Q1fwq.png" alt="" /> */}
                        {
                            !isLogin
                                ?
                                <h1>login</h1>
                                :
                                <h1>Register</h1>
                        }
                    </div>

                    <form onSubmit={handleSubmit}>

                        {
                            isLogin &&
                            <div className="password">
                                <label htmlFor="name">Name</label><br />
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleLogin}
                                    id="name"
                                    placeholder="name"
                                    autoComplete="off"
                                    required />
                            </div>
                        }

                        <div className="email">
                            <label htmlFor="email">Email</label><br />
                            <input
                                type="email"
                                name="email"
                                onChange={handleLogin}
                                id="email"
                                placeholder="email"
                                required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                name="password"
                                onChange={handleLogin}
                                id="password"
                                placeholder="password"
                                autoComplete="off"
                                required />
                        </div>

                        <div className="register-reset">
                            <div className="checkbox" onClick={handleLoginToggle}>
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Dont have any account ! please register</label>
                            </div>
                            <Link to="/login">forgot password</Link>
                        </div>


                        <div className="submit-button">
                            {
                                !isLogin
                                    ?
                                    <button type="submit">login</button>
                                    :
                                    <button type="submit">Register</button>
                            }

                        </div>
                    </form>

                    <div className="icons">
                        <button>google sing in</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;