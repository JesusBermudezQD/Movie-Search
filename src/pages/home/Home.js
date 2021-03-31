import React, { Component } from "react";
import "./Home.css";

import Search from "../../components/search/Search";
import Result from "../../components/result/Result";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      visible: false,
    };
  }

  handleResult = (data) => {
    this.setState({ list: data.Search, visible: true });
  };
  render() {
    return (
      <>
        <div className="Home-header">
          <Search handleResult={this.handleResult} />
        </div>

        {this.state.visible ?  <Result info={this.state.list} /> : null}
      </>
    );
  }
}

export default Home;
