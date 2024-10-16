import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import ProfileCard from './ProfileCard';
import { MAIN_STREAM_PROFILE, } from '../staticdata/profileDtlData';

const Repersentation = () => {
  return (
    <div className='m-4'>
      <MDBRow>
        <MDBCol style={{ fontSize: '5vw', color: 'black', textAlign: 'left' , fontWeight: 'bold' , marginTop: "5%"}}>
          Our Representation
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {MAIN_STREAM_PROFILE.map((profile, index) => (
          <MDBCol key={index} sm='12' md='12' lg='6' className='d-flex justify-content-center'>
            <ProfileCard profile={profile} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  )
};

export default Repersentation;
