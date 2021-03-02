import React from "react";
import s from "./Page3.module.css";
import {NavLink} from "react-router-dom";


const Page3 = () => {
    return (
        <div className={s.lastPage}>
            <div className={s.firstBlock}>
                <div className={s.someText}>
                    <h1>Title</h1>
                    <strong>Te[xt </strong> - Te[xt.Te[xt.Te[xt.Te[xt.Te[xt.Te[xt....
                </div>
            </div>
            <div className={s.secondBlock}>
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
            <div className={s.lastBlock}>
                <div className={s.picture}>
                    <h3>Lviv City</h3>
                    <img src='http://tvoemisto.tv/media/gallery/full/c/e/centr_lviv.jpg' alt={'lviv'}/>
                </div>
            </div>

        </div>
    );
}

export default Page3;