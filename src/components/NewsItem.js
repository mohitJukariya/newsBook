import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div  className="card mx-2 my-2">
          <img src={imageUrl?imageUrl:"https://images.livemint.com/img/2022/06/25/600x338/415be322-4602-11eb-bc1d-4bfe13e32b0e_1608858841050_1608858879986_1656146286557.jpg"}  className="card-img-top" alt="..."/>
          <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
      </div>
      </div>
    )
  }
}

export default NewsItem