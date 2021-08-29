import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Tours from "./Components/Pages/Tours";
import services from "./Components/Pages/services";
import Signup from "./Components/Pages/Signup";
import Error from "./Components/Pages/Error";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Tours" component={Tours} />
        <Route path="/services" component={services} />
        <Route path="/Signup" component={Signup} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
