import React from 'react';

const PokeDexUI = props => {
  let cardData = (
    <>
      <p>
        <strong>Name: </strong>
        {props.name}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Species: </strong> {props.species}
      </p>
      <p>
        <strong>Location: </strong> {props.location}
      </p>
      <p>
        <strong>Status: </strong>
        {props.status}
      </p>
    </>
  );

  let image = (
    <img src={props.image} alt={props.name} width='100%' height='170' />
  );

  if (props.error) {
    cardData = (
      <p>
        <strong>{props.error}</strong>
      </p>
    );

    image = null;
  }

  return (
    <div id='pokedex'>
      <div id='left'>
        <div id='logo'></div>
        <div id='bg_curve1_left'></div>
        <div id='bg_curve2_left'></div>
        <div id='curve1_left'>
          <div id='buttonGlass'>
            <div id='reflect'> </div>
          </div>
          <div id='miniButtonGlass1'></div>
          <div id='miniButtonGlass2'></div>
          <div id='miniButtonGlass3'></div>
        </div>
        <div id='curve2_left'>
          <div id='junction'>
            <div id='junction1'></div>
            <div id='junction2'></div>
          </div>
        </div>
        <div id='screen'>
          <div id='topPicture'>
            <div id='buttontopPicture1'></div>
            <div id='buttontopPicture2'></div>
          </div>
          <div id='picture'>{image}</div>
          <div id='buttonbottomPicture'></div>
          <div id='speakers'>
            <div className='sp'></div>
            <div className='sp'></div>
            <div className='sp'></div>
            <div className='sp'></div>
          </div>
        </div>
        <div id='bigbluebutton'></div>
        <div id='barbutton1'></div>
        <div id='barbutton2'></div>
        <div id='cross'>
          <div id='leftcross'>
            <div id='leftT'></div>
          </div>
          <div id='topcross'>
            <div id='upT'></div>
          </div>
          <div id='rightcross'>
            <div id='rightT'></div>
          </div>
          <div id='midcross'>
            <div id='midCircle'></div>
          </div>
          <div id='botcross'>
            <div id='downT'></div>
          </div>
        </div>
      </div>
      <div id='right'>
        <div id='stats'>{cardData}</div>
        <div id='blueButtons1'>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
        </div>
        <div id='blueButtons2'>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
          <div className='blueButton'></div>
        </div>
        <div id='miniButtonGlass4'></div>
        <div id='miniButtonGlass5'></div>
        <div id='barbutton3'></div>
        <div id='barbutton4'></div>
        <div id='yellowBox1'></div>
        <div id='yellowBox2'></div>
        <div id='bg_curve1_right'></div>
        <div id='bg_curve2_right'></div>
        <div id='curve1_right'></div>
        <div id='curve2_right'></div>
      </div>
    </div>
  );
};

export default PokeDexUI;
