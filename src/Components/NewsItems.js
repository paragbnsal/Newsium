import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsItems = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const getPage = async (url) => {
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData;
  };

  useEffect(async () => {
    props.setProgress(50)
    let parsedData = await getPage(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=72706429eb454b3abe9ed3d232159297&page=${page}&pageSize=${props.pageSize}`
    );
    props.setProgress(80)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }, [])

  const fetchMoreData = async () => {
    let parsedData = await getPage(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=72706429eb454b3abe9ed3d232159297&page=${page + 1}&pageSize=${props.pageSize}`
    );
    setPage(page + 1)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  return (
    <>
      <div className="container my-3">
        <h2 style={{ marginTop: "75px" }}>Newsify - What's New Today!!</h2>
        {loading && <Spinner />}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
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

NewsItems.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general",
};

NewsItems.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string.isRequired,
};

export default NewsItems;
