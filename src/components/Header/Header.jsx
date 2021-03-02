import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.appHeader}>
            <div className={s.center}>
                <div><h3>Company name</h3></div>
            </div>
        </header>
    );
}

export default Header;
