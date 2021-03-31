import React, { Component } from "react";

import "./Details.css";
import collage from "../../assets/collage.png";
import sinImg from "../../assets/sin.png";

import {Link} from "react-router-dom"

import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LanguageIcon from '@material-ui/icons/Language';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Chip from '@material-ui/core/Chip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//https://www.omdbapi.com/?i=tt3896198&apikey=d01a6bb8
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      id: 1,
    };
    this.API_KEY = "d01a6bb8";
    this.handleInfo = this.handleInfo.bind(this);
  }
  componentDidMount() {
    this.handleInfo();
  }

  handleInfo() {
    const { match } = this.props;
    const id = match.params.id;

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${this.API_KEY}`)
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({ info: data });
      });
  }

  render() {
    console.log(this.state.info);
    const { Poster, Title, Actors, imdbRating, Awards, Plot,Language,Genre,Year } = this.state.info;
    return (
      <div className="father-details">
        <div
          className="header-details"
          style={{ backgroundImage: `url(${collage})` }}
        >

        <Link to="/" className="button-volver"><ArrowBackIcon/></Link>
        </div>
        
        <div className="details">
          <div>
            <img src={Poster==="N/A" ? sinImg : Poster} alt={Title} />
            <div className="info-details1">
              <Chip size="small" variant="outlined" label={Year} icon={<CalendarTodayIcon />} className="info-details1-Crap" />
              <Chip size="small" variant="outlined" label={imdbRating} icon={<ThumbUpAltIcon />}className="info-details1-Crap" />
              <Chip size="small" variant="outlined" label={Language} icon={<LanguageIcon />}className="info-details1-Crap" />
              <Chip size="small" variant="outlined" label={Awards} icon={<StarIcon />}className="info-details1-Crap" />
            </div>
          </div>
          <div className="info-details2">
            <h2>{Title}</h2>
            <h4>Sinopsis:</h4>
            <p>{Plot}</p>
            <h4>Actores: </h4>
            <p>{Actors}</p>
            <h4>Genero: </h4>
            <p>{Genre}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
