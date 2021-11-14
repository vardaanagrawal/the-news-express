import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div id="main_body">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sports" element={<News category={"sports"} />} />
          <Route path="/business" element={<News category={"business"} />} />
          <Route path="/technology" element={<News category={"technology"} />} />
          <Route path="/entertainment" element={<News category={"entertainment"} />} />
          <Route path="/health" element={<News category={"health"} />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
