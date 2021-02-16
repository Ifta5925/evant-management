import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCardBody,
  MDBCard,
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer
      style={{ marginLeft: "34%", marginTop: "8%", marginBottom: "5%" }}
    >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Reset Password</strong>
                </h3>
              </div>
              <form>
                <p className="h5 text-center mb-4">
                  Type Your e-mail to reset your password
                </p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="denger">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
