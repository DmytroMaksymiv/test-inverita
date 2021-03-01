import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={s.appFooter}>
            <div className={s.center}>
                Copyright &copy; Company - 2021 || Privacy Policy Terms of Use
            </div>
        </footer>
    );
}

export default Footer;