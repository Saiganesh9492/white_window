import React from 'react';
import { PROFILE_DTL } from '../staticdata/profileDtlData';
import { color, fontFaimly } from '../staticdata/webData';
import { MDBContainer } from 'mdb-react-ui-kit';
export default function ProfileCard({ profile }) {
  const profileDtl = PROFILE_DTL.find(data => data.id === profile);
  const styles = {
    profileCard: {
      fontFaimly: fontFaimly.font,
      backgroundColor: "#EDEDED",
      width: '100%',
    },
    container: {
      display: 'flex',
      justifyContent: 'around',
    },
    item: {
      width: `${100 / profileDtl.imagesWithYears.length}%`,
      color: color.quoteHeading,
      padding: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2vh',
      fontFamily: fontFaimly.font, 
    },
    textCenter: {
      textAlign: 'center',
    },
    containerDec: {
      display: 'flex',
      justifyContent: 'around',
      margin: '1rem 0',
    },
    itemDec: {
      width: `${100 / profileDtl.imagesWithYears.length}%`,
      padding: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: '100%',
      height: '0',
      paddingBottom: '100%',
      overflow: 'hidden',
      borderRadius: '50%',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }

  return (
    <div className='text-center m-3 py-3  text-white square rounded-9 overflow-hidden' style={styles.profileCard} >
      <MDBContainer className='d-flex flex-wrap flex-lg-nowrap' >
        <MDBContainer>
          <img src={profileDtl.image} alt='some thing went wrong' className='square rounded-9 overflow-hidden' style={{ width: "100%", aspectRatio: '1 / 1', display: 'flex', objectFit: 'cover' }} />
        </MDBContainer>
        <MDBContainer>
          <p style={{ color: color.quoteHeading, fontFamily: fontFaimly.font, textAlign: 'left', fontSize: '3vh' }}> {profileDtl.description1}</p>
          <p style={{ color: color.lightWhite, fontFamily: fontFaimly.font, textAlign: 'left' }}> {profileDtl.description}</p>
        </MDBContainer>
      </MDBContainer>
      <div style={{ width: "70%" }}>
        <MDBContainer style={styles.containerDec}>
          {profileDtl.imagesWithYears.map((element, index) => (
            <div key={index} style={styles.itemDec}>
              <div style={styles.imageContainer}> <img src={element.url} alt={`img ${index}`} className="img-fluid" style={styles.image} /> </div>
            </div>
          ))}
        </MDBContainer>
        <MDBContainer style={styles.container}>
          {profileDtl.imagesWithYears.map((element, index) => (<div key={index} style={styles.item}> <div style={styles.textCenter}> {element.year} </div> </div>))}
        </MDBContainer>
      </div>
    </div>
  );
}
