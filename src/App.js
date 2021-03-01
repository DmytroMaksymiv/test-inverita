import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <div className="appContent">
                    <Route exact path='/page1' render={() => <Page1/>}/>
                    <Route exact path='/page2' render={() => <Page2/>}/>
                    <Route exact path='/page3' render={() => <Page3/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
