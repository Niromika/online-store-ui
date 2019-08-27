import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

class Header extends React.Component  {

    render() {
        return (
            <div className="Header">
                <img src="/images/dog-logo.png" alt=''/>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/" className="li 	d-none d-lg-block d-xl-block">HOME</Link>
                        </li>
                        <li>
                            <Link to="/login" className="li d-none d-lg-block d-xl-block">LOGIN</Link>
                        </li>
                        <li>
                            <Link to="/register" className="li d-none d-lg-block d-xl-block">REGISTER</Link>
                        </li>
                        <li>
                            <Link to="/profile" className="li d-none d-lg-block d-xl-block">PROFILE</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;