import React from 'react';

const MortyDex = props => {
  let cardData = (
    <>
      <p>Name: {props.name}</p>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p>Location: {props.location}</p>
      <p>Status: {props.status}</p>
      <img src={props.image} alt={props.name} />
    </>
  );

  if (props.error) {
    cardData = <p>{props.error}</p>;
  }

  return <div className='pokeCard'>{cardData}</div>;
};

export default MortyDex;
