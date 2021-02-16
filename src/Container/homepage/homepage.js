import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./homepage.module.css";
import cover from "../../assets/images/cover.jpg";
import Aux from "../../hoc/Auxs";
import TeamSlider from "../../components/TeamSlider/teamSlider";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

class Homepage extends Component {
    render() {
        return (
            <Aux >
                <div className="container-fluid" style={{ margin: "0px !important", padding: "0px !important" }}>
                    <div class="row d-flex justify-content-between">
                        <div class="col-lg-12 col-md-12 col-xs-12" >
                            <div >
                                <Slider />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mt-5">
                            <div class="col-lg-5 col-md-5 col-xs-12">
                                <img src={cover} alt=" cover " style={{ width: "100%" }} />
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 p-2 ">
                                <p className={classes.description}>
                                    WHO WE ARE EMS was created by a group of young
                                    engineering students , who chose their passion as their
                                    profession and this incident of their life have been pushing
                                    them constantly to expand their potentiality. Right now Dream
                                    EMS has the highest number of fan following among Bangladeshi
                                    Event management Facebook pages and has covered the highest
                                    number of events in Bangladesh. Among many other achievements we
                                    recognize this as the most important one as it directly
                                    indicates how many people are relating with us personally.
              </p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-xs-12 p-2 mt-5 ">

                            <iframe title="My Daily Marathon Tracker" width="100%" height="450" src="https://www.youtube.com/embed/ZpeFEBMRCyM?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col-lg-12 col-md-12 col-xs-12 p-2 mt-5 ">
                            <h1><strong>OUR PROFESSIONAL TEAM</strong></h1>
                            <hr />
                            <TeamSlider />
                        </div>
                        <div class="col-lg-12 col-md-12 col-xs-12 p-2 mt-5 " >
                            <OwlCarousel
                                className="owl-theme"
                                items="1"
                                autoplay={true}
                                nav
                                margin={10}
                                loops
                            >
                                <div className={classes.newsletters}>
                                    <img src="https://picsum.photos/id/1036/4608/3072" alt="Placeholder-Image" />
                                    <section>
                                        <h1>CLIENT'S REVIEWS</h1>
                                        <h2><b>Nusrat Nila</b></h2>
                                        <h4 style={{ lineHeight: '2.8rem', letterSpacing: '1px' }}>Thanks a lot EMS team for my wedding pictures.. You people tried your best to make my pictures more special.. Everyone was supportive and friendly.Specially want to give thousand thanksss to my chief photographer Rafi Vaiya.There was an unexpected incident but Rafi vaiya handled it very tactfully,after getting all the pictures im really amazed and thankful.Lots of Duas for him to save my big day and yesss he just nailed it.Thanks for every single capture.Also im thankful to my top photographers and no complaints about the promo and video. Best wishes for DW team.May Allah bless them with more success and prosperity</h4>
                                        <button>Read more.</button>
                                    </section>
                                </div>

                                <div className={classes.newsletters}>
                                    <img src="https://picsum.photos/id/1036/4608/3072" alt="Placeholder-Image" />
                                    <section>
                                        <h1>CLIENT'S REVIEWS</h1>
                                        <h2><b>Towhidul islam</b> </h2>
                                        <h4 style={{ lineHeight: '2.8rem', letterSpacing: '1px' }}>Thanks a lot EMS team for my wedding pictures.. You people tried your best to make my pictures more special.. Everyone was supportive and friendly.Specially want to give thousand thanksss to my chief photographer Rafi Vaiya.There was an unexpected incident but Rafi vaiya handled it very tactfully,after getting all the pictures im really amazed and thankful.Lots of Duas for him to save my big day and yesss he just nailed it.Thanks for every single capture.Also im thankful to my top photographers and no complaints about the promo and video. Best wishes for DW team.May Allah bless them with more success and prosperity</h4>
                                        <button>Read more.</button>
                                    </section>
                                </div>

                                <div className={classes.newsletters}>
                                    <img src="https://picsum.photos/id/1036/4608/3072" alt="Placeholder-Image" />
                                    <section>
                                        <h1>CLIENT'S REVIEWS</h1>
                                        <h2><b>Tasnim </b></h2>
                                        <h4 style={{ lineHeight: '2.8rem', letterSpacing: '1px' }}>Thanks a lot EMS team for my wedding pictures.. You people tried your best to make my pictures more special.. Everyone was supportive and friendly.Specially want to give thousand thanksss to my chief photographer Rafi Vaiya.There was an unexpected incident but Rafi vaiya handled it very tactfully,after getting all the pictures im really amazed and thankful.Lots of Duas for him to save my big day and yesss he just nailed it.Thanks for every single capture.Also im thankful to my top photographers and no complaints about the promo and video. Best wishes for DW team.May Allah bless them with more success and prosperity</h4>
                                        <button>Read more.</button>
                                    </section>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>



            </Aux>
        );
    }
}
export default Homepage;
