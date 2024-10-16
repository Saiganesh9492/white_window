import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { MAIN_STREAM_PROFILE } from '../staticdata/profileDtlData';

export default function HeadCarousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      {
        MAIN_STREAM_PROFILE.map((profile) => (
          <MDBCarouselItem itemId={profile.id} key={profile.id}>
            <img src={profile.image} className='d-block w-100' alt={profile.name}  />
            <MDBCarouselCaption>
              <h5>{profile.name}</h5>
              <p>{profile.description}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))
      }
    </MDBCarousel >
  );
}