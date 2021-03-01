import React from "react";
import s from "./Page1.module.css";
import {NavLink} from "react-router-dom";

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //.log('Отправленное имя:' + this.state.value);
        fetch('http://localhost:8081/api/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: this.state.value})
        })
            .then(res => res.json());
        event.preventDefault(); // зупинити перезагрузку сторінки
    }

    render() {
        return (
            <div>
                <div className={s.dataPosition}>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        <br/>
                        <input type="submit" value="ADD USER"/>
                    </form>
                </div>

                <div className="square">
                    <div>
                        <NavLink to="/page3">
                            <button>Back</button>
                        </NavLink>
                        <NavLink to="/page2">
                            <button>Next</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;