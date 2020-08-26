import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "../../App.scss";

function Footer() {
  return (
    <>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">For Inquiries</h5>
              <MDBRow>
                <MDBCol>
                  <a href="mailto:allynswildflourshoppe@gmail.com">
                    allynswildflourshoppe@gmail.com
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </>
  );
}

export default Footer;
