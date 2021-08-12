import React, {Component} from 'react';
import AltResults from './AltResults';


class AltUserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      results: this.props.results,
      loading: this.props.loading,
    });
  }

  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <AltResults results = {this.props.results}/>
      </table>
    );
  }
}

export default AltUserTable;
