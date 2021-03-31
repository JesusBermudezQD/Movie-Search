import React from "react";
import CarD from "../card/Card";
import "./Result.css"

import Alert from "@material-ui/lab/Alert";

class Result extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className="rootResult" id="result">
        {info ? (
          info.map((pelicula) => (
            <CarD
              key={pelicula.imdbID}
              Title={pelicula.Title}
              Year={pelicula.Year}
              imdbID={pelicula.imdbID}
              Poster={pelicula.Poster}
            />
          ))
        ) : (
          <Alert variant="filled" severity="info" className="Alert">
            Sin peliculas que mostrar :(
          </Alert>
        )}
      </div>
    );
  }
}
export default Result;
