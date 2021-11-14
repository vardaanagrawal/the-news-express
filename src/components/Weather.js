import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [temp, setTemp] = useState();
  const [location, setLoc] = useState();
  const [country, setCountry] = useState();
  const [req, setreq] = useState("delhi");
  const [iconcode, setIconcode] = useState("c01d");
  const [iconurl, setIconurl] = useState(
    "https://www.weatherbit.io/static/img/icons/${iconcode}.png"
  );

  const find = () => {
    let val = document.getElementById("text_field").value;
    setreq(val);
    document.getElementById("text_field").value = "";
  };

  useEffect(() => {
    const url = `https://api.weatherbit.io/v2.0/current?&city=${req}don&key=437c1b27ac9e4b9fa8200253902c06e5`;

    async function fetchWeather() {
      await axios.get(url).then((res) => {
        setTemp(res.data.data[0].temp);
        setLoc(res.data.data[0].city_name);
        setCountry(res.data.data[0].country_code);
        setIconcode(res.data.data[0].weather.icon);
        setIconurl(
          `https://www.weatherbit.io/static/img/icons/${iconcode}.png`
        );
      });
    }
    fetchWeather();
  }, [req]);

  return (
    <div>
      <div id="search_panel" className="d-flex justify-content-around">
        <input
          id="text_field"
          type="text"
          placeholder="location"
        ></input>
        <button id="searchbtn" onClick={find}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </button>
      </div>

      <div className="row" id="display_box">
        <div>
          <img
            id="weathericon"
            src={iconurl}
            style={{
              position: "relative",
              left: "50%",
              transform: "translate(-50%)",
              
              width: '50%',
            }}
          />
        </div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          {location},{country}
        </div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          {temp}*C
        </div>
      </div>
    </div>
  );
}
