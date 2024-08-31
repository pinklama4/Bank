import {NavLink} from "react-router-dom";
import './Header.css'
import logo from '../../assets/image/Logo.png'
import {HeaderContent, HeaderEntrance, HeaderNavbar, HeaderSection} from "./header.style.js";
import LayoutWindow from "../../theme/LayoutWindow.js";


export function Header() {
const setActive = ({isActive}) => isActive ? 'active-link' : ' '
    return (
        <>
            <LayoutWindow>
                <HeaderSection>
                    <HeaderContent>
                        <div>
                            <img src={logo} alt="logo"/>
                        </div>
                        <HeaderNavbar>
                            <NavLink
                                to="/"
                                className={setActive}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/careers"
                                className={setActive}
                            >
                                Careers
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={setActive}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/security"
                                className={setActive}
                            >
                                Security
                            </NavLink>
                        </HeaderNavbar>
                        <HeaderEntrance>
                            {/*Поменять на Link*/}
                            <NavLink to="/signup">Sign Up</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </HeaderEntrance>
                    </HeaderContent>
                </HeaderSection>
            </LayoutWindow>
        </>
    )
}