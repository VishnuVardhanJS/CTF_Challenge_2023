import { Link } from "react-router-dom";
import "./Card.css"


function Card({title,url}) {
    return ( 
        <div className="home-card-container">
          <p className="card-text"> {title}</p>
          <Link to={`/${url}`} 
          className="card-container-btn"
          >View More</Link >
        </div>
     );
}

export default Card;