import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div id="main_body">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/sports"><News category={"sports"} /></Route>
          <Route path="/business"><News category={"business"} /></Route>
          <Route path="/technology"><News category={"technology"} /></Route>
          <Route path="/entertainment"><News category={"entertainment"} /></Route>
          <Route path="/health"><News category={"health"} /></Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
