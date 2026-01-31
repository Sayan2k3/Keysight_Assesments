import React from "react";

class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "" };
  }

  static getDerivedStateFromError(error) {
    return { errorMsg: error.message };
  }

  render() {
    if (this.state.errorMsg) {
      return <p>{this.state.errorMsg}</p>;
    }
    return this.props.children;
  }
}

class FirstComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showError: false };
  }

  handleClick = () => {
    this.setState({ showError: true });
  };

  render() {
    if (this.state.showError) {
      throw new Error("Error from First Component");
    }
    return <button onClick={this.handleClick}>Show First Error</button>;
  }
}

function MiddleComp() {
  return <p>You are doing great !!</p>;
}

class ThirdComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showError: false };
  }

  handleClick = () => {
    this.setState({ showError: true });
  };

  render() {
    if (this.state.showError) {
      throw new Error("Error from Third Component");
    }
    return <button onClick={this.handleClick}>Show Third Error</button>;
  }
}

function App() {
  return (
    <div>
      <Boundary>
        <FirstComp />
      </Boundary>

      <MiddleComp />

      <Boundary>
        <ThirdComp />
      </Boundary>
    </div>
  );
}

export default App;
