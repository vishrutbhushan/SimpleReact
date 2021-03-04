import React from "react";
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: "" };
  }
  render() {
    return (
      <div className="square" onClick={() => this.setState({ number: "X" })}>
        {this.state.number}
      </div>
    );
  }
}

export default Square;
