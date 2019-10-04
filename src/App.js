import React from 'react';
import Search from './components/Search';

import './App.css';

class App extends React.Component {
  state = {};

  searchTerm = 'morty';

  getRickandMorty = async e => {
    e.preventDefault();

    const searchQuery = e.target.elements.char.value;

    const api_call = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );

    const data = await api_call.json();
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <Search getRickandMorty={this.getRickandMorty} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
