import React, { Component } from "react";
import Slider from "../../components/ImgSlider/ImgSlider";
import classes from "./contactUs.module.css";
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
                        <h1 style={{ paddingTop: '5%' }}>Contact Us</h1>
                        <p class="path"></p>
                    </div>
                </div>
                <div class="container">

                <div class="row mt-5 mb-5">
        <div
          class="col-lg-6 col-md-6 col-sm-6 col-xs-6"
          
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.15093173592!2d90.34928573511914!3d23.780620653319193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1612268097809!5m2!1sen!2sbd"
            frameborder="0"
            style={{border: "0px", pointerEvents: "none", height:"100%",width:"100%"}}
            allowfullscreen=""
          ></iframe>
        </div>
        <div
          class="col-lg-6 col-md-6 col-sm-6 col-xs-6"
         
        >
          <h2 class="title mb-4">We Love to Hear From You</h2>
          <p class="description mb-5" >
            We will answer any questions you may have about our online sales right here.
          </p>
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 mb-3">
              <p class={classes.subTitle}>OUR STORE</p>
              <p class="description mb-5">House: 99 Dakshinkhan chairmanpara, Dhaka</p>
              <p class={classes.subTitle}>CONTACT INFORMATION</p>
              <p class={classes.description} style={{marginBottom:'0px'}}> iftisk9@gmail.com </p>
              <p class={classes.description} style={{marginBottom:'0px'}}>(+880 ) 1961225925 </p>
              

            </div>
            <div class="col-lg-4 col-md-8 col-sm-8 col-xs-8">
                <p class={classes.subTitle}>OUR BUSINESS HOURS </p>
              <p class={classes.description}>
               
                Saturday  – Thursday 10:00 – 19:00 GMT +6
                
              </p>
            </div>
          </div>
          <hr />
          <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 ">
            <h4 class="mt-3">Leave a Message</h4>
            <form>
                   <div class="form-group">

                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
                
              </div>
              <div class="form-group">

                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
                 <div class="form-group">

                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Subject"
                />
                
              </div>
              <div class="form-group">
               
                <textarea
                placeholder="Enter Message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <button type="submit" class="btn btn-primary ">Submit</button>
            </form>
          </div>
        </div>
                </div>
                </div>

            </section>
        );
    }
}
export default Homepage;
