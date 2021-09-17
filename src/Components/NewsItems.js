import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsItems extends Component {
  static defaultProps = {
    pageSize: 9,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string.isRequired,
  };

  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      loading: true,
      totalResults: 0,
    };
  }

  getPage = async (url) => {
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData;
  };

  async componentDidMount() {
    this.props.setProgress(0)
    let parsedData = await this.getPage(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72706429eb454b3abe9ed3d232159297&page=${this.state.page}&pageSize=${this.props.pageSize}`
      );
      this.props.setProgress(75)
      this.setState({
        articles: parsedData.articles,
        loading: false,
        totalResults: parsedData.totalResults,
      });
      this.props.setProgress(100)
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let parsedData = await this.getPage(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72706429eb454b3abe9ed3d232159297&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Newsify - What's New Today!!</h2>
          {this.state.loading && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      desc={element.description}
                      urlToImage={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      pubAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsItems;
