import React from "react";

const NewsItem = (props) => {
  let { title, desc, urlToImage, url, author, pubAt } = props;
  return (
    <div >
      <div className="card my-2 mx-2" >
        <a href={url} target="_blank" rel="noreferrer" >
          <img src={urlToImage} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <p className="card-text">
            <strong>{title}</strong>
            <br />
            {desc}
            <br />
          </p>
          <p className="my-0" style={{ fontSize: "85%", fontFamily: "monospace" }}>
            {new Date(pubAt).toGMTString()} by {!author ? "Unknown" : author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
