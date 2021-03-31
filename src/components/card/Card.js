import React from "react";
import "./Card.css";
import sinImg from "../../assets/sin.png";

import {Link} from "react-router-dom"

class CarD extends React.Component {
    render() { 
        const {Title,Year,imdbID,Poster}=this.props;
        return ( 
           <Link className="card" to={`/details/${imdbID}`}>
            <img src={Poster==="N/A" ? sinImg : Poster} className="img" alt={Title}/>
            <div>
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </Link>
         );
    }
}
 
export default CarD;