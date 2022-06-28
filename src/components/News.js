import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e907c807334e49b187587438cf0030e7";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }  

  render() {
    return (
      <div className='container my-3'>
        <h2 className='my-5'><strong>NewsBook - समाचार भंडार</strong></h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key = {element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News