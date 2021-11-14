import React from "react";

export default function NewsItem({title,url,urlToImage,}) {
  return (
    <div style={{minHeight: '300px', overflow: 'hidden',border: 'solid black 2px'}}>
      <div style={{height: '140px',overflow: 'hidden'}}>
        <img src={urlToImage} className="card-img-top" alt="..." style={{ width: '100%'}}/>
      </div>
      <div className="row">
        <div className="col-md-9">{title}</div>
        <div className="col-md-3">
            <a href={url} id="gotonews">{`>>`}</a>
        </div>
      </div>
    </div>
  );
}