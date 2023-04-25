import { Link } from "react-router-dom";
import "./Header.css"
import Home from '../../assets/Images/home.png'

function Header() {
    return (
        <div className="header-container">
            <h1 className="header-text">Hindusthan CTF Contest</h1>
            <div className="home-btn">

                <a href="/">Home</a>

            </div>
        </div>
    );
}

export default Header;