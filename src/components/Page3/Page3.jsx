import React from "react";
import s from "./Page3.module.css";
import {NavLink} from "react-router-dom";


const Page3 = () => {
    return (
        <div>
            <div className={s.someText}>
                <h1>Title</h1>
                <strong>Te[xt </strong> - Te[xt.Te[xt.Te[xt.Te[xt.Te[xt.Te[xt....
            </div>

            <div className={s.picture}>
                <h3>Lviv City</h3>
                <img src='http://tvoemisto.tv/media/gallery/full/c/e/centr_lviv.jpg' alt={'lviv'}/>
            </div>

            <div className="square">
                <div>
                    <NavLink to="/page2">
                        <button>Back</button>
                    </NavLink>
                    <NavLink to="/page1">
                        <button>Next</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Page3;