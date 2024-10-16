import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import { headingData, fontFaimly, color } from '../staticdata/webData';

const Heading = () => {
  const styles = {
    container: {
      marginTop: '9vh',
      marginBottom: '15vh',
      fontFamily: fontFaimly.font,
    },
    heading: {
      maxWidth: '100%',
      fontSize: '5vw',
      color: color.quoteHeading,
      textAlign: 'left',
    },
    quote: {
      marginLeft: '50%',
      maxWidth: '100%',
      fontSize: '1.5vw',
      color: color.lightWhite,
      textAlign: 'left',
    },
  };
  return (
    <MDBContainer style={styles.container}>
      <p style={styles.heading}>{headingData.heading}</p>
      <p style={styles.quote}>{headingData.quote}</p>
    </MDBContainer>
  );
};

export default Heading;


