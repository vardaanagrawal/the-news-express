import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid " >
        <Link className="nav-link active link" to="/" style={{fontSize: 'x-large',fontWeight: 'bold'}}>
          The News Express
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link active link2" to="/sports">
                Sports
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active link2" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active link2" to="/business">
                Business
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active link2" to="/health">
                Health
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active link2" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}