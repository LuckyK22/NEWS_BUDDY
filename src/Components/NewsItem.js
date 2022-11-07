import React from 'react'

const NewsItem = (props) => {
 
    let {title, description, imageURL, NewsURl, author, date, source} = props;
    return (
      <>
        <div className="card bg-dark text-light"  style={{display:'flex', justifyContent:'center'}}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%", zIndex:'1'}}>{source}</span>
            <img src={!imageURL?"https://images.indianexpress.com/2022/09/James-Webb-Space-Telescope-Einstein-Ring-20220906-1.jpg": imageURL} className="card-img-top" alt="Hello"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger">by {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={NewsURl} target="blank" className="btn btn-sm btn-light">Read More</a>
            </div>
        </div>

        
      </>
    )
  
}

export default NewsItem