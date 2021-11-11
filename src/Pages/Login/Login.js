
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar';
import './Login.css';

const Login = () => {
    // toggle login and register
    const [isLogin, setIsLogin] = useState(false);
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

                    <form>
                        <div className="email">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" name="email" id="email" placeholder="email" required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" name="password" id="password" placeholder="password" autoComplete="off" required />
                        </div>
                        {
                            isLogin &&
                            <div className="password">
                                <label htmlFor="password">Password</label><br />
                                <input type="password" name="password" id="password" placeholder="password" autoComplete="off" required />
                            </div>
                        }


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