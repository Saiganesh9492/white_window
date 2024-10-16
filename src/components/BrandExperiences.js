import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { color, fontFaimly } from '../staticdata/webData';

const ExampleComponent = () => {
  const brandsData = [
    { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' }, { icon: "", name: 'name' },
  ]
  const styles = {
    container: {
      textAlign: 'center',
      fontFamily: fontFaimly.font, 
    },
    mainText: {
      fontSize: '200%',
      maxWidth: '100%',
      color: color.quoteHeading,
    },
    subText: {
      color: color.lightWhite,
      fontSize: '80%',
    },
  };

  return (
    <MDBContainer style={styles.container}>
      <p style={styles.mainText}>Worked with 50 + brands</p>
      <p style={styles.subText}>
        Many companies have tried using Finzo and they trust <br />
        the safety of their money
      </p>
      <MDBRow>
        {brandsData.map((data, index) => (
          <MDBCol className='my-3' key={index} sm='4' lg='3' md='3' >
            <div className='square rounded-9 overflow-hidden d-flex justify-content-center align-items-center' style={{ backgroundColor: color.cardBg, padding: '15px', minHeight: "200px" }}> {data.name}</div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default ExampleComponent;
