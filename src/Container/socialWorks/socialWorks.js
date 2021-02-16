import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./socialWorks.module.css";
import cover from "../../assets/images/cover.jpg";
import Aux from "../../hoc/Auxs";
import Footer from "../../components/Footer/footer";
import TeamSlider from "../../components/TeamSlider/teamSlider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Card from "../../components/UI/Card/card";
import img1 from '../../assets/images/sw2.jpg'
import img2 from '../../assets/images/sw3.jpg'

class Homepage extends Component {
  render() {
    return (
      <section>
        <div className={classes.cartBanner}>
          <div class="container cartTitle">
            <h1 style={{ paddingTop: "5%" }}>Our Social Works</h1>
            <p class="path"></p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class={classes.leftcolumn}>
              <div class={classes.card}>
                <h2>Cloth distribution</h2>
                {/* <h5>Title description, Dec 7, 2017</h5> */}
                <div class={classes.fakeimg} style={{ height: "100%", width:"150%" }}>
                  <img src= {img2} />
                </div>
                {/* <p>Some text..</p> */}
                {/* <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
              </div>
              <div class={classes.card}>
                <h2>Food distribution</h2>
                {/* <h5>Title description, Sep 2, 2017</h5> */}
                <div class={classes.fakeimg} style={{ height: "100%", width:"150%" }}>
                  <img src={img1}  / >
                </div>
                {/* <p>Some text..</p> */}
                {/* <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
              </div>
            </div>
            <div class={classes.rightcolumn}>
              {/* <div class={classes.card}>
                <h2>freaturing Posts</h2>
                <div class={classes.fakeimg} style={{ height: "100px" }}>
                  Image
                </div>
                <p>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
              </div> */}
              {/* <div class={classes.card}>
                <h3>Popular Post</h3>
                <div class={classes.fakeimg}>Image</div>
                <br />
                <div class={classes.fakeimg}>Image</div>
                <br />
                <div class={classes.fakeimg}>Image</div>

                <div class={classes.card}>
                  <h3>Follow Me</h3>
                  <p>Some text..</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Homepage;
