import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.appNav}>
            <div className={s.item}>
                <NavLink to="/page1" activeClassName={s.activeLink}><strong>Page 1</strong></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/page2" activeClassName={s.activeLink}><strong>Page 2</strong></NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/page3" activeClassName={s.activeLink}><strong>Page 3</strong></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
