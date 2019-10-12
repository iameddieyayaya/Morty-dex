import React from 'react';

const Search = props => {
  return (
    <form onSubmit={props.getRickandMorty} className='ui input'>
      <input
        type='text'
        name='char'
        placeholder='Search...'
        required
        autoComplete='off'
      />
      <button>Find Character</button>
    </form>
  );
};

export default Search;
