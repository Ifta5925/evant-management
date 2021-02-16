import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./about.module.css";
import cover from "../../assets/images/cover.jpg";
import Aux from "../../hoc/Auxs";
import Footer from "../../components/Footer/footer";
import TeamSlider from "../../components/TeamSlider/teamSlider";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Card from "../../components/UI/Card/card";

class Homepage extends Component {
    render() {
        return (
            <section >
                <div className={classes.cartBanner}>
                    <div class="container cartTitle">
                        <h1 style={{ paddingTop: '5%', textAlign: 'center' }}>About us</h1>
                        <p class="path"></p>
                    </div>
                </div>
                <div class="container-fluid">

                    <div class="row mt-5 mb-5" >
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className={classes.whythis}>
                                <div class="col-lg-8 col-md-8 col-sm-8" style={{ marginLeft: '15%' }}>
                                    <div className={classes.whythisdescription}>
                                        <h1>WHY Choose Us</h1>

                                        <div style={{ width: '100%', float: 'left', height: '100%' }}>
                                            <ul style={{ listStyleType: 'upper-roman', lineHeight: '3.7rem', fontSize: '16px'}}>
                                                <li>We have a proven track record and genuine commitment to delivering results.</li>
                                                <li>We never let the client down (and never have).  We communicate with you every step of the way with project plans, regular updates and reports.</li>
                                                <li>We conduct thorough up front research to ensure we find you the perfect venue for your requirements – an important foundation for your event.</li>
                                                <li>We use our superior negotiation skills to maximise your conference dollar at every possibility – with all savings achieved returned directly to you.</li>
                                                <li>We work with accuracy and scrupulous attention to detail whilst being highly flexible and adaptable.</li>
                                                <li>We integrate honesty, integrity and business ethics into all aspects of our business functioning.</li>
                                                <li>onesty and ethics – we forge true partnership with our clients – working together for the best possible outcome.</li>
                                                <li>We have comprehensive public liability and professional indemnity cover.</li>
                                                <li>Innovation and creativity – we try to ensure our events are a little different.</li>
                                                <li>We listen – taking the time to fully get to know your business, your culture, your target audience and your unique objectives – enabling us to deliver the most effective solution to your needs.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 " style={{ padding: "5%" }}>
                            <div class="col-lg-5 col-md-6 col-sm-6 col-xs-6 ">
                                <div className={classes.aboutCeo}></div>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6">
                                <div className={classes.ceoDescription}>
                                    <p className={classes.ceoDescriptiontext}> Our event planners are not the average event planners. They are well-trained and experienced as they have got their training directly from the IUTPS and from our chief planner Sanjana Afrin. Attending world class event planning workshop is one of their concern. We have got the group of experts . We have a chief event planners,a theme maker,a stylist,and a choreographer to improve your frame.</p>
                                    <br />
                                    <p className={classes.ceoDescriptiontext}>We value your special day and know how much precious it is for you. The gala day of one’s life passes so quickly that when you look back, you will find a blur memory of that. Specially without the memories captured by the cameras it would all seem just like a scattered oblivion. So, to make the very special day ever memorable for you and to let you have reminiscence Dream Weaver is always at your service! Celebrate those moments again and again with your near and dear ones. </p>
                                    <h1 style={{ paddingLeft: '22%', paddingTop: '10%' }}>"See those dream which wont make to sleep"</h1>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Homepage;
