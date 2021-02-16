import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBInput,
  MDBInputGroup,
} from "mdbreact";
import { Fragment } from "react";

class PillsWithinTheTabs extends Component {
  state = {
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };
  toggleOuterTabs = (tab) => (e) => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab,
      });
    }
  };

  toggleInnerPills = (tab) => (e) => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab,
      });
    }
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <MDBRow>
              <MDBCol md="12">
                <MDBCard>
                  <MDBCardImage
                    hover
                    overlay="white-light"
                    className="card-img-top"
                    src="https://st2.depositphotos.com/1531183/5706/v/600/depositphotos_57064869-stock-illustration-unknown-person-silhouette-whith-blue.jpg"
                    alt="man"
                  />

                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle className="card-title">
                      <strong style={{ fontSize: "1.75rem" }}>User</strong>
                    </MDBCardTitle>

                    <p className="font-weight-bold blue-text">
                      Event Details & Status
                    </p>

                    {/* <MDBCardText>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam.{" "}
                    </MDBCardText> */}
                    <Fragment>
                      <MDBBtn rounded color="logout">
                        <a href="/login">Log Out</a>
                      </MDBBtn>
                    </Fragment>
                    <MDBCol md="12" className="d-flex justify-content-center">
                      <MDBBtn rounded floating color="fb">
                        <MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
                      </MDBBtn>

                      <MDBBtn rounded floating color="tw">
                        <MDBIcon size="lg" fab icon="twitter"></MDBIcon>
                      </MDBBtn>

                      <MDBBtn rounded floating color="github">
                        <MDBIcon size="lg" fab icon="github"></MDBIcon>
                      </MDBBtn>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
          <div className="col-lg-9 col-md-8">
            <MDBContainer>
              <h2 className=" mb-5">User Profile</h2>
              <MDBNav tabs className="nav-justified" color="primary">
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={this.state.activeItemOuterTabs === "1"}
                    onClick={this.toggleOuterTabs("1")}
                    role="tab"
                    style={
                      this.state.activeItemOuterTabs === "1"
                        ? { backgroundColor: "#008b8b", color: "white" }
                        : { backgroundColor: "#008b8b63", color: "#4a1414" }
                    }
                  >
                    <MDBIcon icon="usinfo-circleer" /> Details
                  </MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={this.state.activeItemOuterTabs === "2"}
                    onClick={this.toggleOuterTabs("2")}
                    role="tab"
                    style={
                      this.state.activeItemOuterTabs === "2"
                        ? { backgroundColor: "#008b8b", color: "white" }
                        : { backgroundColor: "#008b8b63", color: "#4a1414" }
                    }
                  >
                    <MDBIcon icon="heart" /> Follow
                  </MDBNavLink>
                </MDBNavItem> */}
              </MDBNav>
              <MDBTabContent
                className="card mb-5"
                activeItem={this.state.activeItemOuterTabs}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="4">
                      <MDBNav pills color="primary" className="flex-column">
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItemInnerPills === "1"}
                            onClick={this.toggleInnerPills("1")}
                            style={{
                              border: "1px solid #9cd2d2",
                              fontSize: "1.75rem",
                            }}
                          >
                            Profile <MDBIcon icon="user" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItemInnerPills === "2"}
                            onClick={this.toggleInnerPills("2")}
                            style={{
                              border: "1px solid #9cd2d2",
                              fontSize: "1.75rem",
                            }}
                          >
                            Invoices
                            <MDBIcon icon="file-alt" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItemInnerPills === "3"}
                            onClick={this.toggleInnerPills("3")}
                            style={{
                              border: "1px solid #9cd2d2",
                              fontSize: "1.75rem",
                            }}
                          >
                            Event Details
                            <MDBIcon icon="address-card" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItemInnerPills === "1"}
                            onClick={this.toggleInnerPills("4")}
                            style={{
                              border: "1px solid #9cd2d2",
                              fontSize: "1.75rem",
                            }}
                          >
                            Change Password <MDBIcon icon="lock" className="ml-2" />
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBTabContent
                        activeItem={this.state.activeItemInnerPills}
                      >
                        <MDBTabPane tabId="1">
                          <MDBInput label="First Name" icon="user" />
                          <MDBInput label="Middle Name" icon="user" />
                          <MDBInput label="Last Name" icon="user" />
                          <MDBInputGroup
                            containerClassName="mb-3"
                            prepend="Gender"
                            inputs={
                              <select className="browser-default custom-select">
                                <option value="0">Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                              </select>
                            }
                          />
                          <MDBInput label="Number" icon="phone-alt" />
                          <MDBInput label="Email" icon="envelope" />
                          <div class="d-flex justify-content-center">
                            <MDBBtn color="blue-grey">
                              <center>Update Profile</center>
                            </MDBBtn>
                          </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="2">
                          <h5>Panel 2</h5>
                        </MDBTabPane>
                        <MDBTabPane tabId="3">
                        <MDBContainer>
                            <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Event No"
                              size="lg"
                            />
                            <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Package"
                              size="lg"
                            />
                            <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Date"
                              size="lg"
                            />
                            <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Food"
                              size="lg"
                            />
                            <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Total Amount"
                              size="lg"
                            />
                            <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Status"
                              size="lg"
                            />
                              <MDBInputGroup
                              containerClassName="mb-3"
                              prepend="Paid"
                              size="lg"
                            />
                          </MDBContainer>
                        </MDBTabPane>
                        <MDBTabPane tabId="4">
                        <MDBInput label="Old Password" type="password" />
                        <MDBInput label="New Password" type="password" />
                        <div class="d-flex justify-content-center">
                            <MDBBtn color="blue-grey">
                              <center>Submit</center>
                            </MDBBtn>
                          </div>
                        </MDBTabPane>
                      </MDBTabContent>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBCardBody>
                        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                        <MDBCardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </MDBCardText>
                        <MDBBtn>Go somewhere</MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
              </MDBTabContent>
            </MDBContainer>
          </div>
        </div>
      </div>
    );
  }
}
export default PillsWithinTheTabs;
