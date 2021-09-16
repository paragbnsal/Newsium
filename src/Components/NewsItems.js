import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class NewsItems extends Component {

    static defaultProps = {
      pageSize: 9,
      country: "in",
      category: "general"
    }
    static propTypes = {
      pageSize: PropTypes.number,
      country: PropTypes.string,
      category: PropTypes.string.isRequired 
    }

    articles = []

      constructor(){
          super();
          this.state = {
              articles: this.articles,
              page: 1,
              loading: false
          }
      }
      
      getPage = async (url)=> {        
        let data = await fetch(url);
        let parsedData = await data.json(); 
        return parsedData;        
      }
      async componentDidMount() {
        this.setState({loading: true})  
        let parsedData = await this.getPage (`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27c49801e260406ca6f95f9cc2fc6a44&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.setState({
              articles: parsedData.articles,
              loading: false,
              totalResults: parsedData.totalResults
            })             
      }
      
      handleNextClick = async () => {
          if(this.state.page + 1 < Math.ceil(this.state.totalResults/this.props.pageSize)){

            this.setState({loading: true})  
            let parsedData = await this.getPage (`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27c49801e260406ca6f95f9cc2fc6a44&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
            this.setState({
              articles: parsedData.articles,
              loading: false,
              totalResults: parsedData.totalResults,
              page: this.state.page + 1
            })         
          }
        
        }
        
        handlePrevClick = async () => {

          this.setState({loading: true})  
        let parsedData = await this.getPage (`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27c49801e260406ca6f95f9cc2fc6a44&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
          this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults,
            page: this.state.page - 1
          })         
      }

  render() {
    return (
      <div className="container my-3">
        <h2>Newsify - What's New Today!!</h2>
        {this.state.loading && <Spinner/> }
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{            
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} desc = {element.description} urlToImage = {element.urlToImage} url = {element.url} author = {element.author} pubAt = {element.publishedAt}/>
          </div>
        })}
        </div>
        <div className="container text-center my-3">
          <button disabled= {this.state.page<2} type="button" className="btn btn-primary mx-3" onClick={this.handlePrevClick}>Previous</button>
          <button type="button" className="btn btn-primary mx-3" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default NewsItems;
