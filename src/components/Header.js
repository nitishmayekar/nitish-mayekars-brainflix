import React from "react";
import logo from '../assets/Logo/BrainFlix-logo.svg';
import avatar from '../assets/Images/Mohan-muruge.jpg';
import arrow from '../assets/Icons/upload.svg';
import searchicon from '../assets/Icons/search.svg';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img className="header__logo--image" src={logo} alt="the logo" />
            </Link>
            <input
                className="header__searchbar header__searchbar-icon"
                type="text"
                placeholder="Search"
                style={{ backgroundImage: `url(${searchicon})` }}
            ></input>
            <div className="header__button-section">
                <Link to="/upload" className="header__button-section--button">
                    <button className="header__button-section--button">
                        <img
                            className="header__button-section--plus"
                            src={arrow}
                            alt="the arrow"
                        />{' '}
                        UPLOAD
                    </button>
                </Link>
                <img
                    className="header__button-section--face"
                    src={avatar}
                    alt="the face"
                />
            </div>
        </header>
    );
};
export default Header;