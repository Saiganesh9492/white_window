import React from 'react';
import { NISH_PROFILE, PROFILE_DTL } from '../staticdata/profileDtlData';
import { MDBBtn } from 'mdb-react-ui-kit';


const Nish = () => {
  function getProfileUrl(id, key) {
    const profile = PROFILE_DTL.find(profile => profile.id === id);
    return profile ? profile[key] : 'Oops!';
  }
  return (
    <div className='m-5' style={{ position: 'relative', backdropFilter: 'blur(5px)', overflow: 'hidden' }}>
      {
        NISH_PROFILE.map((profile, index) => (
          <img
            className='square rounded-9 overflow-hidden'
            key={index}
            src={getProfileUrl(profile, 'image')}
            alt={getProfileUrl(profile, 'image')}
            style={{ width: `${100 / NISH_PROFILE.length}%`, padding: '2%', aspectRatio: '1 / 1', objectFit: 'cover' }}
          />
        ))
      }
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '100%',
        zIndex: '1',
        overflow: 'hidden',
        backdropFilter: 'blur(2px)',
        background: 'linear-gradient(to top, rgb(255, 255, 255, 1), rgb(255, 255, 255, 0))'
      }}></div>

      <MDBBtn color='light' rippleColor='dark' style={{
        position: 'absolute',
        bottom: '20%',
        left: '50%', // Center horizontally
        transform: 'translateX(-50%)', // Adjust to center
        zIndex: '2', // Ensure it's above the gradient
        color: 'black',
        backgroundColor: 'white'
      }}>view more
      </MDBBtn>
    </div>

  )
}

export default Nish