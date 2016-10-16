import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDrpET9HcYg1hGBSxONLcrcVkbglGZADbo';

//create a new component. This component shoud produce
//some html
//functional component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
)
}

//take this component's generated html and put it //in the dom
ReactDOM.render(<App />, document.querySelector('.container'));
