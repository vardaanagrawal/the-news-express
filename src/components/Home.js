import React from "react";
import Weather from "./Weather";
import Covid from "./Covid";
import News from "./News";
export default function Home() {
  return (
    <div className="container" id="home_body">
      <div className="row">
        <div className="col-md-3" id="home_first_col">
          <div id="weather_box">
            <div id="weather_heading">WEATHER</div>
            <div>
              <Weather />
            </div>
          </div>
          <div id="covid_box">
            <div id="covid_heading">COVID 19</div>
            <div>
              <Covid />
            </div>
          </div>
        </div>

        <div className="col-md-1" id="home_second_col"></div>

        <div className="col-md-8" id="home_third_col">
          <div id="topheadlines_box">
            <div id="topheadlines_heading">TOP HEADLINES</div>
            <News category={"general"} />
          </div>
        </div>
      </div>
    </div>
  );
}
