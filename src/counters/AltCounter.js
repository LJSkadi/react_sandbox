import React from 'react';

class AltCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 42,
    };
    this.addClick = this.addClick.bind(this);
    this.subtractClick = this.subtractClick.bind(this);
  }

  addClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  subtractClick() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2 className="counter">{this.state.counter}</h2>
        <Add counter={this.state.counter} onAddClick={this.addClick} />
        <Subtract counter={this.state.counter} onSubstractClick={this.subtractClick} />
      </div>
    );
  }
}
class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <button className="counter-button" onClick={this.props.onAddClick}>Add</button>
      </div>
    );
  }
}
class Subtract extends React.Component {
  render() {
    return (
      <div className="substract">
        <button className="counter-button" onClick={this.props.onSubstractClick}>Subtract</button>
      </div>
    );
  }
}

export default AltCounter;
