import React, { Component } from 'react';
//define a new class and give it access to all the functionality that React.Component has
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}
//we need default bc?
export default SearchBar;
