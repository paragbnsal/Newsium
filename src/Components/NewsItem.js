import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
      let {title , desc , urlToImage , url , author , pubAt} = this.props;
    return (
      <div >
        <div className="card my-3" style={{width: "20rem"}}>
            <a href={url} target="_blank" >
              <img src={urlToImage} className="card-img-top" alt="..."  />
            </a>
          <div className="card-body">
            <p className="card-text">
                <strong>{title.slice(0,60)}...</strong>
                <br />            
                {desc.slice(0,100)}...
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
