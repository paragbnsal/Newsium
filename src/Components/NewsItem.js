import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
      let {title , desc , urlToImage , url , author , pubAt} = this.props;
    return (
      <div >
        <div className="card my-2 mx-2" style={{width: "18rem"}}>
            <a href={url} target="_blank" rel="noreferrer" >
              <img src={urlToImage} className="card-img-top" alt="..."  />
            </a>
          <div className="card-body">
            <p className="card-text">
                <strong>{title}</strong>
                <br />            
                {desc}
                <br />
            </p>
            <p className="my-0" style = {{fontSize: "85%", fontFamily:"monospace"}}>
                {pubAt} by {author}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
