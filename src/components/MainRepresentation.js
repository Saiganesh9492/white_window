import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react'
import { fontFaimly } from '../staticdata/webData';

const MainRepresentation = () => {
  const links = [
    { url: '/swetha_basu.png', year: 2021 },
    { url: '/priya_anand.png', year: 2020 },
    { url: '/meharin.png', year: 2019 },
    { url: '/lavanya_tripat.png', year: 2022 },
  ];

  const styles = {
    container: {
      textAlign: 'left',
    },
    name: {
      fontSize: '300%',
      fontWeight: 'bolder',
      margin: '1rem 0',
    },
    description: {
      margin: '0.5rem 0',
      fontSize: '180%',
    },
    representation: {
      fontSize: '220%',
      marginTop: '2rem',
    },
    dividerContainer: {
      padding: '1rem',
      width: '90%',
      margin: 'auto',
    },
    divider: {
      borderTop: '1px solid white',
      width: '100%',
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    imageBlur: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backdropFilter: 'blur(0.05px)',
      backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), black',
      zIndex: 1,
    },
    mainRepresentation: {
      fontFamily: fontFaimly.font
    },
  };

  return (
    <div className='text-center m-3  bg-black text-white square rounded-9 overflow-hidden' style={styles.mainRepresentation}>
      <MDBRow  >
        <MDBCol sm='12' md='6' className='d-flex justify-content-center p-0 m-0'>
          <div style={styles.imageContainer}> <img src="/vedhika.png" alt="Representation" style={styles.image} /> <div style={styles.imageBlur}></div> </div>
        </MDBCol>
        <MDBCol sm='12' md='6' className='d-flex justify-content-center p-4 m-0'>
          <div style={styles.container}>
            <p style={styles.name}>Kajal Agarwal</p>
            <p style={styles.description}>
              Create a custom card that reflects your unique style
              and personality. Choose from a range of colors,
              patterns, and designs to customize the look of your
              card.
            </p>
            <p style={styles.representation}>With our Representation</p>
            <div style={styles.dividerContainer}> <div style={styles.divider}></div> </div>
            <MDBContainer className="d-flex justify-content-around flex-wrap">
              {links.map((element, index) => (
                <div key={index} style={{ width: `${100 / links.length}%`, padding: '5px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: '0', paddingBottom: '100%', overflow: 'hidden', borderRadius: '50%', position: 'relative' }}>
                    <img
                      src={element.url}
                      alt={`img ${index}`}
                      className="img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, }}
                    />
                  </div>
                </div>
              ))}
              {links.map((element, index) => (
                <div key={index} style={{ width: `${100 / links.length}%`, padding: '5px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="text-center">
                    {element.year}
                  </div>
                </div>
              ))}
            </MDBContainer>
            <div style={styles.dividerContainer}> <div style={styles.divider}></div> </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default MainRepresentation