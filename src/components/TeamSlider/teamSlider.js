import React, { useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import classes from './teamSlider.module.css'
import img from '../../assets/images/about-ceo.png'
import img1 from '../../assets/images/tahmid.jpg'
import img3 from '../../assets/images/ifti.jpg'

const teamSlider = () => {
    let joinclass = ['card', 'item'];
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay={true}
                nav
                margin={10}
                loops
            >
                <div className={classes.card} >
                    <div className={classes.imgBx}>
                        <img src={img} alt="images" />
                    </div>
                    <div className={classes.details}>
                        <h2>Sanjana Afrin<br /><span>CEO</span></h2>
                    </div>
                </div>

                <div className={classes.card} >
                    <div className={classes.imgBx}>
                        <img src={img1} alt="images" />
                    </div>
                    <div className={classes.details}>
                        <h2>Tahmidul Haque<br /><span>Media Manager</span></h2>
                    </div>
                </div>

                <div className={classes.card} >
                    <div className={classes.imgBx}>
                        <img src={img3} alt="images" />
                    </div>
                    <div className={classes.details}>
                        <h2>Ifta Kharul Islam<br /><span>Managing Director</span></h2>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.imgBx}>
                        <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div className={classes.details}>
                        <h2>SomeOne Famous<br /><span>Director</span></h2>
                    </div>
                </div>

                <div className={classes.card} >
                    <div className={classes.imgBx}>
                        <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div className={classes.details}>
                        <h2>SomeOne Famous<br /><span>Producer</span></h2>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.imgBx}>
                        <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div className={classes.details}>
                        <h2>SomeOne Famous<br /><span>Actor</span></h2>
                    </div>
                </div>

                


            </OwlCarousel>

        </div>
    )
}

export default teamSlider;
