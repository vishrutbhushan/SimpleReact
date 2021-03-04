import React from "react";
import Square from "./square";

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="row">
          <Square number={0} />
          <Square number={1} />
          <Square number={2} />
        </div>
        <div className="row">
          <Square number={3} />
          <Square number={4} />
          <Square number={5} />
        </div>
        <div className="row">
          <Square number={6} />
          <Square number={7} />
          <Square number={8} />
        </div>
      </div>
    );
  }
}

export default Board;
