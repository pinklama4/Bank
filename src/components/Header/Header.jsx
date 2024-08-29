import {NavLink} from "react-router-dom";
import './Header.css'
import LayoutWindow from "../../theme/LayoutWindow.js";


import logo from '../../assets/image/Logo.png'


export function Header() {
const setActive = ({isActive}) => isActive ? 'active-link' : ' '
    return (
        <>
            <LayoutWindow>
                <header>
                    <div className="header-content">
                        <div className="header-content__logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <nav className="header-content__navbar">
                            <NavLink to="/" className={setActive}>Home</NavLink>
                            <NavLink to="/careers" className={setActive}>Careers</NavLink>
                            <NavLink to="/about" className={setActive}>About</NavLink>
                            <NavLink to="/security" className={setActive}>Security</NavLink>
                        </nav>
                        <div className="header-content__entrance">
                            {/*Поменять на Link*/}
                            <NavLink to="/signup">Sign Up</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </div>
                    </div>
                </header>
            </LayoutWindow>
        </>
    )
}