import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Covid() {
  const [wwcases, setwwcases] = useState();
  const [wwrecovered, setwwrecovered] = useState();
  const [wwdeaths, setwwdeaths] = useState();
  const [wwactive, setwwactive] = useState();
  const [indiacases, setindiacases] = useState();
  const [indiarec, setindiarec] = useState();
  const [indiadeaths, setindiadeaths] = useState();
  const [indiaactive, setindiaactive] = useState();

  useEffect(() => {
    const url = `https://disease.sh/v3/covid-19/all`;
    const inurl = `https://disease.sh/v3/covid-19/countries/india`;
    async function fetchCovid() {
      await axios.get(url).then(
        (res) => {
          setwwcases(res.data.cases);
          setwwrecovered(res.data.recovered);
          setwwdeaths(res.data.deaths);
          setwwactive(res.data.active);
        },
        [wwcases]
      );
    }
    fetchCovid();
    async function fetchinCovid() {
      await axios.get(inurl).then(
        (res) => {
          setindiacases(res.data.cases);
          setindiarec(res.data.recovered);
          setindiadeaths(res.data.deaths);
          setindiaactive(res.data.active);
        },
        [indiacases]
      );
    }
    fetchinCovid();
  });

  return (
    <div
      style={{
        margin: "5px",
        border: "solid black 2px",
        borderRadius: "10px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ color: "black" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              Worldwide
            </div>
            <div>cases: {wwcases}</div>
            <div>active: {wwactive}</div>
            <div>recovered: {wwrecovered}</div>
            <div>deaths: {wwdeaths}</div>
          </div>
          <div class="carousel-item">
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>India</div>
            <div>cases: {indiacases}</div>
            <div>active: {indiaactive}</div>
            <div>recovered: {indiarec}</div>
            <div>deaths: {indiadeaths}</div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
