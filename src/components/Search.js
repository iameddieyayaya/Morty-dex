import React from 'react';

const Search = props => {
  return (
    <form onSubmit={props.getRickandMorty} className='ui input'>
      <input
        type='text'
        name='char'
        placeholder='Find Character...'
        required
        autoComplete='off'
        style={{ marginRight: '5px' }}
      />
      <button className='ui primary button'>Search</button>
    </form>
  );
};

export default Search;
