import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./ourWork.module.css";
import cover from "../../assets/images/cover.jpg";
import Aux from "../../hoc/Auxs";
import Footer from "../../components/Footer/footer";
import TeamSlider from "../../components/TeamSlider/teamSlider";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Card from "../../components/UI/Card/card";

import img1 from '../../assets/images/w-w.jpg'
import img2 from '../../assets/images/j-t.jpg'

class OurWork extends Component {
    render() {
        return (
            <section >
                <div className={classes.cartBanner}>
                    <div class="container cartTitle">
                        <h1 style={{ paddingTop: '5%' }}>Our Work </h1>
                        <p class="path"></p>
                    </div>
                </div>
                <div className="container" style={{ margin: "0px !important", padding: "0px !important" }}>
                    <div class="row">
                        <div class="col-2 col-lg-3 col-md-3 col-sm-3" >
                        <h3  >Event History</h3>
                            <input class="form-control" type="text" placeholder="Search events here…" style={{ height: '30px', marginTop: '1%' }} />

                            <div class="list-group" style={{ marginTop: '1%' }}>
                                <h3 style={{ marginTop: '5%' }}>Wedding Ceremony</h3>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h4 class="mb-1" style={{ lineHeight: "2.8rem" }}>Wedding</h4>
                                        <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1" style={{ fontSize: "12px", lineHeight: "2.8rem" }}>location: Banani</p>
                                </a>
                            </div>

                            <div class="list-group" style={{ marginTop: '1%' }}>
                                <h3 style={{ marginTop: '5%' }}>Birthday Party</h3>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h4 class="mb-1" style={{ lineHeight: "2.8rem" }}>Birthday</h4>
                                        <small>6 days ago</small>
                                    </div>
                                    <p class="mb-1" style={{ fontSize: "12px", lineHeight: "2.8rem" }}>location: Uttara</p>
                                </a>

                            </div>

                        </div>
                        <div class="col-10 col-lg-9 col-md-9 col-sm-9" >
                            <div class="row">
                                <div class="col-lg-12 col-12 col-sm-12 col-md-12" style={{ paddingBottom: "5%", borderBottom: "1px solid #00000036", }}>
                                    <h1>Total 2 events </h1>
                                </div>
                                <div class="col-lg-12 col-12 col-sm-12 col-md-12" style={{ textAlign: "center", border: "1px solid #00000036", marginTop: '1%' }}>
                                    <div class="row">
                                        <div className='col-lg-4 col-4 col-sm-4 col-md-4'>
                                            <img src={img1} alt="image" style={{ height: '250px ', width: '100%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} />
                                        </div>
                                        <div className='col-lg-8 col-8 col-sm-8 col-md-8' style={{ textAlign: "center", border: "1px solid #00000036" }}>
                                            <p style={{ fontSize: '18px' }}>White theme weddding 2020</p>
                                            <p style={{ opacity: 0.5 }}>08/23/2020 at 20:00 - 22:00 on Banani</p>
                                            {/* <p style={{ color: 'red' }}> Tickets from $52</p> */}
                                            {/* <p>Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p> */}
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-12 col-12 col-sm-12 col-md-12" style={{ textAlign: "center", border: "1px solid #00000036", marginTop: '1%' }}>
                                    <div class="row">
                                        <div className='col-lg-4 col-4 col-sm-4 col-md-4'>
                                            <img src={img2} alt="image" style={{ height: '250px ', width: '100%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} />
                                        </div>
                                        <div className='col-lg-8 col-8 col-sm-8 col-md-8' style={{ textAlign: "center", border: "1px solid #00000036" }}>
                                            <p style={{ fontSize: '18px' }}>Jungle theme Birthday 2016</p>
                                            <p style={{ opacity: 0.5 }}>08/23/2020 at 20:00 - 22:00 on Uttara</p>
                                            {/* <p style={{ color: 'red' }}> Tickets from $52</p>
                                            <p>Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p> */}
                                        </div>
                                    </div>
                                </div>


                                {/* <div class="col-lg-12 col-12 col-sm-12 col-md-12" style={{ textAlign: "center", border: "1px solid #00000036", marginTop: '1%' }}>
                                    <div class="row">
                                        <div className='col-lg-4 col-4 col-sm-4 col-md-4'>
                                            <img src={img1} alt="image" style={{ height: '250px ', width: '100%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} />
                                        </div>
                                        <div className='col-lg-8 col-8 col-sm-8 col-md-8' style={{ textAlign: "center", border: "1px solid #00000036" }}>
                                            <p style={{ fontSize: '18px' }}>Boots and Hearts 2016</p>
                                            <p style={{ opacity: 0.5 }}>08/23/2016 at 20:00 - 22:00 on Manhattan / New York</p>
                                            <p style={{ color: 'red' }}> Tickets from $52</p>
                                            <p>Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
export default OurWork;
