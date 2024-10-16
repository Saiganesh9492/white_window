import React from "react";
import { MDBFooter, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { color, fontFaimly, footerLinks } from "../staticdata/webData";

export default function Footer() {
  return (
    <div className='text-center m-4' style={{ fontFamily: fontFaimly.font }}>
      <MDBFooter className="text-center p-3 bg-black text-white rounded-9" >
        <div className="my-5">
          <MDBRow style={{ left: "0" }}>
            <MDBCol sm='12' lg='6' md='12' className="d-flex flex-column text-start">
              <div style={{ fontSize: "300%", fontWeight: 'bold', marginLeft: '10%' }}>Keep up with <br /> the latest</div>
              <div style={{ fontSize: "100%", fontWeight: 'bold', marginLeft: '10%', color: color.lightWhite }}>Join our newsletter to stay upto date on features and realeases.</div>
            </MDBCol>
            <MDBCol sm='12' lg='6' md='12' className="d-flex justify-center">
              <form className="text-start" style={{ width: "60%" }}>
                <div>Stay up to date</div>
                <div className="d-flex my-3 p-1">
                  <MDBInput
                    label="Email input"
                    id="typeEmail"
                    className="text-white rounded-pill" 
                    placeholder="Enter your email"
                    type="email"
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'white',
                      color: 'white' // Text color
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'white'; // Set border color to white on focus
                      e.target.style.setProperty('--placeholder-color', 'white'); // Set placeholder color to white on focus
                    }}
                    onBlur={(e) => {
                      // Optional: Reset border color on blur if you want
                      e.target.style.borderColor = ''; // Reset border color on blur (if desired)
                      e.target.style.setProperty('--placeholder-color', ''); // Reset placeholder color (if desired)
                    }}
                    onInput={(e) => {
                      e.target.style.setProperty('--placeholder-color', 'white'); // Keep placeholder color white if there's input
                      e.target.style.borderColor = 'white'; // Keep border color white
                    }}
                  />
                  <MDBBtn
                    className="text-black square rounded-pill"
                    style={{
                      marginLeft: "10%",
                      backgroundColor: "white",
                      padding: 'auto', padding: '0 10%',
                      fontSize: "100%",
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <span>Subscribe</span>   </MDBBtn>
                </div>
                <div><span>By subscribing you agree to our</span> <a href="/" style={{ textDecoration: 'underline', color: 'white' }}>Privacy Policy</a> </div>
              </form>
            </MDBCol>
          </MDBRow>
        </div>
        <div className="p-3" style={{ width: "90%", margin: "auto" }}>
          <div style={{ borderTop: "1px solid white", width: "100%" }}></div>
        </div>
        <div className="mt-5" style={{ width: "90%", margin: "auto" }}>
          <MDBRow >
            <MDBCol md="6" sm="12" lg="3" style={{ textAlign: 'left', color: '#878787' }}>
              <span>Make your complicated</span>
              <p>finance more simple</p>
            </MDBCol>
            <MDBCol md="3" sm="12" lg="1">
              <MDBListGroup>
                {
                  footerLinks.Finzo.map((link, index) => (
                    <MDBListGroupItem noBorders key={index} style={{ textAlign: 'left', backgroundColor: "black" }} > <Link style={{ color: link.color }} to={link.url}> {link.name} </Link></MDBListGroupItem>
                  ))
                }
              </MDBListGroup>
            </MDBCol>
            <MDBCol md="3" sm="12" lg="2">
              <MDBListGroup>
                {
                  footerLinks.Products.map((link, index) => (
                    <MDBListGroupItem noBorders key={index} style={{ textAlign: 'left', backgroundColor: "black" }} > <Link style={{ color: link.color }} to={link.url}> {link.name} </Link></MDBListGroupItem>
                  ))
                }
              </MDBListGroup>
            </MDBCol>
            <MDBCol md="3" sm="12" lg="1">
              <MDBListGroup>
                {
                  footerLinks.Company.map((link, index) => (
                    <MDBListGroupItem noBorders key={index} style={{ textAlign: 'left', backgroundColor: "black" }} > <Link style={{ color: link.color }} to={link.url}> {link.name} </Link></MDBListGroupItem>
                  ))
                }
              </MDBListGroup>
            </MDBCol>
            <MDBCol md="3" sm="12" lg="2">
              <MDBListGroup>
                {
                  footerLinks.Developer.map((link, index) => (
                    <MDBListGroupItem noBorders key={index} style={{ textAlign: 'left', backgroundColor: "black" }} > <Link style={{ color: link.color }} to={link.url}> {link.name} </Link></MDBListGroupItem>
                  ))
                }
              </MDBListGroup>
            </MDBCol>
            <MDBCol md="3" sm="12" lg="1">
              <MDBListGroup>
                {
                  footerLinks.Community.map((link, index) => (
                    <MDBListGroupItem noBorders key={index} style={{ textAlign: 'left', backgroundColor: "black" }} > <Link style={{ color: link.color }} to={link.url}> {link.name} </Link></MDBListGroupItem>
                  ))
                }
              </MDBListGroup>
            </MDBCol>
            <MDBCol md="3" sm="12" lg="1">
              <MDBListGroup>
                {
                  footerLinks.Support.map((link, index) => (
                    <MDBListGroupItem noBorders key={index} style={{ textAlign: 'left', backgroundColor: "black" }} > <Link style={{ color: link.color }} to={link.url}> {link.name} </Link></MDBListGroupItem>
                  ))
                }
              </MDBListGroup>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBFooter>
      <div className="text-center text-black m-3">© 2023 Finzo. All Rights Reserved</div>
    </div>
  );
}
