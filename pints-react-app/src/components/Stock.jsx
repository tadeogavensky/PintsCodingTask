import React, { Component } from "react";
import { iex } from "../config/iex";
import "../assets/css/stock.css";

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      img: "",
    };
  }

  componentDidMount() {
    console.log("symbol", this.state.symbol);
    const url = `${iex.base_url}/stock/${this.props.stockSymbol}/quote?token=${iex.token}`;

    const img = `https://storage.googleapis.com/iex/api/logos/${this.props.stockSymbol}.png`;

    console.log("img", img);

    Promise.all([
      fetch(url).then((res) => res.json()),
      fetch(img).then((res) => res.json()),
    ])
      .then(([stockData, stockImg]) => {
        /*  console.log("stockImg", stockImg); */
        this.setState({
          data: stockData,
          /*   img: stockImg, */
        });
        console.log(this.state.data);
        /* console.log(this.state.img); */
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="stockCard">
        <div className="logoContainer">
          <img id="logo" src={this.props.stockImg} alt=""></img>
        </div>
        <div className="stockCoInfo">
          <h3 id="stockSymbol">{this.state.data.symbol}</h3>
          <p id="stockCompany">{this.state.data.companyName}</p>
        </div>
        <div className="values">
          <h3 id="stockValue">${this.state.data.iexRealtimePrice}</h3>
          <div className="metaValues">
            <div className="metaUpOrDown">
              <img id="arrow" src={this.props.arrow} alt=""></img>
              <b id="stockPriceChange">{this.state.data.change}</b>
            </div>
            <b id="stockPctChange">{this.state.data.changePercent}%</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
