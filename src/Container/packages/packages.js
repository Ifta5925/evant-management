import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./packages.module.css";
import cover from "../../assets/images/cover.jpg";
import Aux from "../../hoc/Auxs";
import Footer from "../../components/Footer/footer";
import TeamSlider from "../../components/TeamSlider/teamSlider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Card from "../../components/UI/Card/card";

class Homepage extends Component {
  render() {
    return (
      <section>
        <div className={classes.cartBanner}>
          <div class="container cartTitle">
            <h1 style={{ paddingTop: "5%" }}>Packages</h1>
            <p class="path"></p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 my-5">
              <div class={classes.pricingTable}>
                <div class={classes.pricingTableHeader}>
                  <h3 class={classes.title}>SUPER SAVER </h3>
                  <div class={classes.priceValue}>TK.20,000/=</div>
                </div>
                <div class={classes.pricingContent}>
                  <ul>
                    <li>Holud Stage</li>
                    <li>50pcs Chair</li>
                    <li>Dance Stage</li>
                    <li>Photographer: 1 Top Photographer</li>
                    <li>Event Duration: 4 Hours</li>
                    <li>Number of Pictures: Unlimited (All post processed)</li>
                    <li>Specially Edited Photos: 100 copies</li>
                    <li>Print: 4R (4”x6″) Matte Prints: 100 copies</li>
                  </ul>
                  <div class={classes.pricingTableSignup}>
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 my-5">
              <div class={classes.pricingTable}>
                <div class={classes.pricingTableHeader}>
                  <h3 class={classes.title}>Premium</h3>
                  <div class={classes.priceValue}>TK.50,000/=</div>
                </div>
                <div class={classes.pricingContent}>
                  <ul>
                    <li>
                      Photographer: Top 2 photographer & 1 Cinematographer.
                    </li>
                    <li>Wedding Stage & Sound system</li>
                    <li>Holud Stage</li>
                    <li>100pcs Chair</li>
                    <li>Dance Stage</li>
                    <li>Event Duration: 4 Hours</li>
                    <li>Number of Pictures: Unlimited (All post processed)</li>
                    <li>Specially Edited Photos: 200 copies</li>
                  </ul>
                  <div class={classes.pricingTableSignup}>
                    <a href="#">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Homepage;
