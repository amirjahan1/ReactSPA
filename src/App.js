import React, {Component, Fragment} from "react";
import './App.css'
import Navbar from "./Component/Header/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import "animate.css"
import Home from "./Component/MainComponent/Home";
import Sign from "./Component/MainComponent/Sign";
import {About} from "./Component/MainComponent/About";
import ShowCard from "./Component/CardList/Card/ShowCard/ShowCard";
import ShoppingCart from "./Component/ShoppingCart/ShoppingCart";






class App extends Component{
  constructor() {
    super();

  }


  render() {
    return(
        <Fragment>
            <Router>
            <Navbar/>


                <Switch>
                 <Route exact path="/" component={Home}/>

                    <Route path="/Sign" component={Sign}/>

                    <Route path="/About" component={About}/>

                    <Route path="/ShowCard:id/:fname/:lname/:email/:money" component={ShowCard} />

                    <Route path="/ShoppingCart" component={ShoppingCart}/>
            </Switch>
            </Router>
            <Footer/>
        </Fragment>
    )
  }

}

export default App;