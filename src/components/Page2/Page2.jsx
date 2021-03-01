import React from "react";
import s from "./Page2.module.css";
import {NavLink} from "react-router-dom";

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8081/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            );
    }

    render() {
        return (
            <div>
                <div className={s.dataPosition}>
                    <h2>All Users:</h2>
                    <h3> {this.state.items.map(item => <li>{item.name}</li>)} </h3>
                </div>
                <div className="square">
                    <div>
                        <NavLink to="/page1">
                            <button>Back</button>
                        </NavLink>
                        <NavLink to="/page3">
                            <button>Next</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page2;