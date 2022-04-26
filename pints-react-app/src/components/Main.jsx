import React from "react";
import Stock  from "./Stock";
export const Main = () => {
  return (
    <React.Fragment>
      <Stock stockSymbol="AAPL" />
      <Stock stockSymbol="NFLX" />
      <Stock stockSymbol="GOOG" />
      <Stock stockSymbol="AMZN" />
      <Stock stockSymbol="TSLA" />
    </React.Fragment>
  );
};
