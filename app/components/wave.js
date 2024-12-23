import React from 'react';
import Wave from 'react-wavify';

const WaveComponent = () => (
  <Wave
    fill='rgba(31,41,55,1)' 
    paused={false}
    style={{ display: 'flex',
        height:"70px",
     }}
    options={{
      height: 20,
      amplitude: 20,
      speed: 0.15,
      points: 4
    }}
  />
);

export default WaveComponent;