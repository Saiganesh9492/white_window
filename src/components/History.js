import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  const images = Array.from({ length: 40 }, (_, index) => `/Pinterest_Logo.svg.png`);

  const boxStyle = {
    position: 'relative',
    width: '25%',
    height: '200px',
    flexShrink: 0,
  };

  const topBorderStyle = {
    top: "5px",
    borderTop: '1px solid black',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const circleStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: 'black',
    borderRadius: '50%',
    position: 'absolute',

  };

  const verticalLineStyle = {
    position: 'absolute',
    left: '50%',
    width: '1px',
    height: '30%',
    backgroundColor: 'black',
  };

  return (
    <div className='m-4' style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
      <div style={{
        position: 'relative',
        left: '0',
        top: '0',
        height: '10px',
        borderTop: "5px solid transparent",
        borderLeft: "10px solid black",
        borderBottom: "5px solid transparent"
      }}></div>

      {images.map((_, index) => (
        <div key={index} style={boxStyle}>
          <div style={topBorderStyle}>
            <div style={circleStyle}></div>
          </div>
          <div style={verticalLineStyle}></div>
          <Link to="/">
            <div style={{
              position: 'absolute',
              top: '30%',
              height: '50%',
              paddingLeft: "10px",
              paddingRight: "10px",
              width: '100%'
            }}><img
                src={_} className='text-center'
                alt={`Image ${index + 1}`}
                style={{ width: '100%', borderRadius: '8px', paddingLeft: "30%", paddingRight: "30%" }}
              /></div></Link>
        </div>
      ))}
      <div style={{
        position: 'relative',
        right: '0',
        top: '0',
        height: '10px',
        borderTop: "5px solid transparent",
        borderRight: "10px solid black",
        borderBottom: "5px solid transparent"
      }}></div>
      <style>
        {`
          /* Hide scrollbar for WebKit browsers */
          div::-webkit-scrollbar {
            display: none; /* Hide scrollbar */
          }
        `}
      </style>
    </div>
  );
};

export default History;
