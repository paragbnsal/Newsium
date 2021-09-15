import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsItems extends Component {
    articles = []

      constructor(){
          super();
          this.state = {
              articles: this.articles,
              page: 1,
              pageSize:15
          }
      }
      
      getPage = async (url)=> {        
        let data = await fetch(url);
        let parsedData = await data.json(); 
        return parsedData;        
      }
      async componentDidMount() {
        let parsedData = await this.getPage (`https://newsapi.org/v2/everything?q=tesla&from=2021-08-15&sortBy=publishedAt&apiKey=27c49801e260406ca6f95f9cc2fc6a44&page=${this.state.page}&pageSize=15`);
        this.setState({articles: parsedData.articles})          
        this.setState({totalResults: parsedData.totalResults})          
      }
      
      handleNextClick = async () => {
          console.log("Next")

          if(this.state.page + 1 < Math.ceil(this.state.totalResults/this.state.pageSize)){

            let parsedData = await this.getPage (`https://newsapi.org/v2/everything?q=tesla&from=2021-08-15&sortBy=publishedAt&apiKey=27c49801e260406ca6f95f9cc2fc6a44&page=${this.state.page + 1}&pageSize=15`);
            this.setState({articles: parsedData.articles})  
            this.setState({page: this.state.page + 1})  
          }
        
        }
        
        handlePrevClick = async () => {
        console.log("Prev")

        let parsedData = await this.getPage (`https://newsapi.org/v2/everything?q=tesla&from=2021-08-15&sortBy=publishedAt&apiKey=27c49801e260406ca6f95f9cc2fc6a44&page=${this.state.page - 1}&pageSize=15`);
          this.setState({articles: parsedData.articles})  
          this.setState({page: this.state.page - 1})
      }

  render() {
    return (
      <div className="container my-3">
        <h2>Newsify - What's New Today!!</h2>
        <div className="row">
        {this.state.articles.map((element)=>{            
          return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title} desc = {element.description} urlToImage = {element.urlToImage} url = {element.url} author = {element.author} pubAt = {element.publishedAt}/>
          </div>
        })}
        </div>
        <div className="container text-center my-3">
          <button disabled= {this.state.page<2} type="button" class="btn btn-primary mx-3" onClick={this.handlePrevClick}>Previous</button>
          <button type="button" class="btn btn-primary mx-3" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default NewsItems;
