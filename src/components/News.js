import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

export default function General({ category }) {
  const [articles, setarticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalres, setTotalres] = useState(70);
  const [ndisabled, setNdisabled] = useState(false);
  const [pdisabled, setPdisabled] = useState(true);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=8a7abcd34f014b1f93ba5427d8240842&pageSize=9&page=${page}`;
    axios.get(url).then((res) => {
      setarticle(res.data.articles);
      setTotalres(res.data.totalResults);
    });
  }, [category, page]);

  const next = async () => {
    console.log(page + 1);
    setPage(page + 1);
    setPdisabled(false);
    if (page == Math.floor(totalres / 9)) {
      setNdisabled(true);
    }
  };

  const prev = async () => {
    console.log(page - 1);
    setPage(page - 1);
    setNdisabled(false);
    if (page == 2) {
      setPdisabled(true);
    }
  };

  return (
    <>
      <div className="row" id="news_box">
        {articles.map((element) => {
          return (
            <div className="  col-lg-4  my-3">
              <NewsItem
                title={element.title}
                url={element.url}
                urlToImage={element.urlToImage}
              />
            </div>
          );
        })}
      </div>
      <div
        className="justify-content-around d-flex"
        style={{ height: "5vh", margin: "5px" }}
      >
        <button disabled={pdisabled} onClick={prev}>
          Prev
        </button>
        <button disabled={ndisabled} onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

/*
<div className="row container" style={{height: '50%',background: 'red'}}>
        {articles.map((element) => {
          return (
            <div className="  col-md-4  my-3" >
              <NewsItem
                title={element.title}
                url={element.url}
                urlToImage={element.urlToImage}
              />
            </div>
          );
        })}
      </div>
      <div className="justify-content-around d-flex">
      <button disabled={pdisabled} onClick={prev}>Prev</button>
        <button disabled={ndisabled} onClick={next}>Next</button>
      </div>
      */
