import React, {Component} from 'react';

class AltResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.setState({
      results: this.props.results,
    });
  }

  render() {
    const results = this.props.results;
    return (
      <tbody>
        {results.map((result, i) => {
          return (
            <tr key={i}>
              <td>{result.id}</td>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
            </tr>
          );
        })
        }
      </tbody>
    );
  }
}

export default AltResults;
