import React from "react";

import "./Search.css";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      visible: false,
    };
    this.API_KEY = "d01a6bb8";

    this.handleResult = this.props.handleResult;

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value,visible:false })
  }

  handleClick(e) {
    if (!this.state.text) {
      alert("Ingrese pelicula a busca");
    } else {
      fetch(`https://www.omdbapi.com/?s=${this.state.text.trim()}&apikey=${this.API_KEY}`)
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
          this.handleResult(data);
          this.setState({visible:true})
        })
        .catch((err) => {
          console.log(err);
          this.handleResult({});
        });
    }
    this.setState({ text: "" });
  }

  render() {
    return (
      <>
        <Paper className="rootSearch">
          <InputBase
            onChange={this.handleChange}
            className="input"
            placeholder="Search Movie"
            value={this.state.text}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            onClick={this.handleClick}
            className="iconButton"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        {this.state.visible ? <a href="#result" className="button"><ArrowDownwardIcon/></a> : null}
      </>
    );
  }
}

export default Search;
