import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.appHeader}>
            <div className={s.center}>
                <div><h3>Your idea can change the world</h3></div>
            </div>
        </header>
    );
}

export default Header;
