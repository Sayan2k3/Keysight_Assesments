import React from "react";
import "./counter.css";

class Counter extends React.Component {
  state = { count: 0 };

  add = () => this.setState({ count: this.state.count + 1 });
  subtract = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="page">
        <div className="card">
          <h2 className="title">Counter App</h2>
          <p className="count">Counter : {this.state.count}</p>

          <button className="btn add" onClick={this.add}>+ Add</button>
          <button className="btn sub" onClick={this.subtract}>- Subtract</button>
          <button className="btn reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
