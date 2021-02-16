import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./ourTeam.module.css";
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
                        <h1 style={{ paddingTop: '5%' }}>Our Team</h1>
                        <p class="path"></p>
                    </div>
                </div>
                <div className="container" style={{ margin: "0px !important", padding: "0px !important" }}>
                    <div class="row">
                        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3 mx-5 my-5">
                            <Card />
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3 mx-5 my-5">
                            <Card />
                        </div>
                        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3 mx-5 my-5">
                            <Card />
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
export default Homepage;
