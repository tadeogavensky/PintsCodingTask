import React from "react";
import Stock  from "./Stock";
import arrow from "../assets/img/down-arrow.png"
import logo from "../assets/img/apple-logo.png"

export const Main = () => {
  return (
    <React.Fragment>
      <Stock stockSymbol="AAPL" arrow={arrow} stockImg={logo}/>
      <Stock stockSymbol="NFLX" arrow={arrow}/>
      <Stock stockSymbol="GOOG" arrow={arrow}/>
      <Stock stockSymbol="AMZN" arrow={arrow}/>
      <Stock stockSymbol="TSLA" arrow={arrow}/>
    </React.Fragment>
  );
};
