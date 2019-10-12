import React from 'react';
import Search from './components/Search';
import MortyDex from './components/MortyDex';

import './App.css';

class App extends React.Component {
  state = {};

  getRickandMorty = async e => {
    e.preventDefault();

    const searchQuery = e.target.elements.char.value;
    const api_call = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const data = await api_call.json();

    try {
      if (searchQuery) {
        this.setState({
          name: data.results[0].name,
          gender: data.results[0].gender,
          image: data.results[0].image,
          location: data.results[0].location.name,
          species: data.results[0].species,
          status: data.results[0].status,
          error: null
        });
      }
    } catch (err) {
      this.setState({
        error: 'Not Found',
        name: null,
        gender: null,
        image: null,
        location: null,
        species: null,
        status: null
      });
    }
  };

  render() {
    const {
      name,
      gender,
      image,
      location,
      species,
      status,
      error
    } = this.state;

    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <Search getRickandMorty={this.getRickandMorty} />
            <MortyDex
              name={name}
              gender={gender}
              image={image}
              location={location}
              species={species}
              status={status}
              error={error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
