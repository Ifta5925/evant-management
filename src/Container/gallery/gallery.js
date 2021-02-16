import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./gallery.module.css";
import cover from "../../assets/images/cover.jpg";
import Aux from "../../hoc/Auxs";
import Footer from "../../components/Footer/footer";
import TeamSlider from "../../components/TeamSlider/teamSlider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Card from "../../components/UI/Card/card";
import img1 from "../../assets/images/wd1.jpeg";
import img2 from "../../assets/images/wd2.jpeg";
import img3 from "../../assets/images/wd3.jpeg";
import img4 from "../../assets/images/bd1.jpeg";
import img5 from "../../assets/images/bd2.jpeg";
import img6 from "../../assets/images/bd3.jpeg";
import img7 from "../../assets/images/j-t.jpg";
import img8 from "../../assets/images/bd5.jpeg";
import img9 from "../../assets/images/wd5.jpg";
import img10 from "../../assets/images/wd6.jpeg";

class Gallery extends Component {
  render() {
    return (
      <section>
        <div className={classes.cartBanner}>
          <div class="container cartTitle">
            <h1 style={{ paddingTop: "5%" }}>Our Gallery</h1>
            <p class="path"></p>
          </div>
        </div>
        <div class="conrtainer mx-5">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
              <div class={classes.gridContainer}>
                <div class={classes.items}>
                  <img class="grid-item grid-item-1" src={img1} alt="" />
                  {/* <p>"I'm so happy today!"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-2 " src={img2} alt="" />
                  {/* <p>"I see those nugs."</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-3" src={img3} alt="" />
                  {/* <p>"I love you so much!"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-4" src={img4} alt="" />
                  {/* <p>"I'm the baby of the house!"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-5" src={img5} alt="" />
                  {/* <p>"Are you gunna throw the ball?"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-6" src={img6} alt="" />
                  {/* <p>"C'mon friend!"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-7" src={img7} alt="" />
                  {/* <p>"A rose for mommy!"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-8" src={img8} alt="" />
                  {/* <p>"You gunna finish that?"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-9" src={img9} alt="" />
                  {/* <p>"We can't afford a cat!"</p> */}
                </div>
                <div class={classes.items}>
                  <img class="grid-item grid-item-10" src={img10} alt="" />
                  {/* <p>"Dis my fren!"</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Gallery;
