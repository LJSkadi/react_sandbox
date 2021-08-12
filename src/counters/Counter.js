import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 42,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }


  render() {
    return (
      <div>
        <h2 className="counter">{this.state.counter}</h2>
        <button className="counter-button" onClick={(e) => {
          this.handleClick();
        }}>Click</button>
      </div>
    );
  }
}

export default Counter;
