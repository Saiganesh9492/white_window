import React, { useState } from 'react';

import {
  MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import { color, fontFaimly } from '../staticdata/webData';

const Navbar = () => {
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

  function getStyle(styleName, screen) {
    const style = {
      middle: screen ? { display: 'flex', justifyContent: 'center', width: "100%" } : {},
      overall: screen ? { display: 'flex', justifyContent: 'space-between', width: "100%" } : {},
      right: screen ? { display: 'flex', justifyContent: 'center', width: "100%" } : {},
      collaps: screen ? { width: "100%" } : {},
      openAccount: screen? {backgroundColor: color.quoteHeading, color: color.whiteColor, paddingInline: ""} : {}
    }
    return style[styleName];
  }

  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light' style={{ border: 'none', boxShadow: 'none', fontFamily: fontFaimly.font, color: color.quoteHeading, fontSize: "130%" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-center' style={{ width: "33%" , fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '150%'}}><div className='w-100'>WWS</div> </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02' style={getStyle('collaps', !openNavColorSecond)} >
            <MDBNavbarNav className='' style={getStyle('overall', !openNavColorSecond)}>
              <div style={getStyle('middle', !openNavColorSecond)}>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/'>Products <MDBIcon fas icon="chevron-down" /></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/'>Company <MDBIcon fas icon="chevron-down" /></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/'>Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/'>Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/'>Support<MDBIcon fas icon="chevron-down" /></MDBNavbarLink>
                </MDBNavbarItem>
              </div>
              <div style={getStyle('right', !openNavColorSecond)}>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/'>Login</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/' className={`${openNavColorSecond ? '' : 'square rounded-pill px-4 mx-4'}`}  style={getStyle('openAccount', !openNavColorSecond)}>Open Account</MDBNavbarLink>
                </MDBNavbarItem>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <style>
        {`
          .collapse-content{
            width: 100%;
          }
          .nav-link {
            color: ${color.quoteHeading}
            
          }
        `}
      </style>
    </div>
  )
}

export default Navbar