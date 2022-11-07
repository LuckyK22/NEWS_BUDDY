import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        document.title = `NEWS-Buddy   ${this.props.head} `;
    }

     updatePage = async () =>{
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);

    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        });
    };

    async componentDidMount() { 
        this.updatePage();
    }


    render() {
        return (
            <>
            {/* <div className=" text-center "> */}
                <div className="container my-3 text-center ">
                    <h1 className="">NEWS-Buddy : Get daily News Update</h1>
                    <div className="row my-5">
                        <div>
                            <h2>
                                <em>Top {this.props.head} Headlines</em>
                            </h2>
                        </div>
                    {this.state.loading && <Spinner />}
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            <div className="container  row">
                            {/* <div className="row"> */}
                                {this.state.articles.map((element) => {
                                     return(
                                        <div className="col-md-4  my-5" key={element.url}>
                                            <NewsItem
                                                title={element.title ? element.title : " "}
                                                description={element.description ? element.description : ""}
                                                imageURL={element.urlToImage}
                                                NewsURl={element.url}
                                                author={element.author}
                                                date={element.publishedAt}
                                                source={element.source.name}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            {/* </div> */}
                        </InfiniteScroll>
                            </div>
                    </div>
                    {/* </div> */}
            </>
        );
    }
}

export default News;
