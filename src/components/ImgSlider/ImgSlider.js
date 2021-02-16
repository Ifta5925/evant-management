import React, { useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import classes from './ImgSlider.module.css';
import Images1 from "../../assets/images/couple-1.jpeg";
import Images2 from "../../assets/images/couple-2.jpg";
import Images3 from "../../assets/images/couple-3.jpeg";
import Images4 from "../../assets/images/couple-4.jpg";
import Images5 from "../../assets/images/couple-5.jpg";

const Slider = () => {
    return (
            
            <OwlCarousel
                className="owl-theme"
                items="1"
                autoplay={true}
                nav
                margin={10}
                loops
            >
                <div className={classes.newsletters} >
                                <img src="https://solutiondots.com/wp-content/uploads/2016/09/Event-Management-System1.jpg" />
                                <section >
                                    <h1>Ready to take you beyond your imagination!</h1>
                                    
                                    <h4 style={{lineHeight:'2.8rem',letterSpacing:'1px'}}>
                                        With the uniqueness of our concepts and hard working quality, we are always a step ahead from others.
                                        <br/>
                                        We take photos so perfectly that you will feel the same that you had felt in that very special day
                                        <br/>
                                        with your very special one.
                                    </h4>
                                    <button className={classes.button}>View Gellary</button>
                                </section>
                            </div>
                            <div className={classes.newsletters}>
                                <img src="https://solutiondots.com/wp-content/uploads/2016/09/Event-Management-System1.jpg" alt="Placeholder-Image" />
                                <section >
                                    <h1>Ready to take you beyond your imagination!</h1>
                                    
                                    <h4 style={{lineHeight:'2.8rem',letterSpacing:'1px'}}>
                                        With the uniqueness of our concepts and hard working quality, we are always a step ahead from others.
                                        <br/>
                                        We take photos so perfectly that you will feel the same that you had felt in that very special day
                                        <br/>
                                        with your very special one.
                                    </h4>
                                    <button className={classes.button}>View Gellary</button>
                                </section>
                            </div>
                            <div className={classes.newsletters}>
                                <img src="https://solutiondots.com/wp-content/uploads/2016/09/Event-Management-System1.jpg" alt="Placeholder-Image" />
                                <section >
                                    <h1>Ready to take you beyond your imagination!</h1>
                                    
                                    <h4 style={{lineHeight:'2.8rem',letterSpacing:'1px'}}>
                                        With the uniqueness of our concepts and hard working quality, we are always a step ahead from others.
                                        <br/>
                                        We take photos so perfectly that you will feel the same that you had felt in that very special day
                                        <br/>
                                        with your very special one.
                                    </h4>
                                    <button className={classes.button}>View Gellary</button>
                                </section>
                            </div>
                            <div className={classes.newsletters}>
                                <img src="https://solutiondots.com/wp-content/uploads/2016/09/Event-Management-System1.jpg" alt="Placeholder-Image" />
                                <section >
                                    <h1>Ready to take you beyond your imagination!</h1>
                                    
                                    <h4 style={{lineHeight:'2.8rem',letterSpacing:'1px'}}>
                                        With the uniqueness of our concepts and hard working quality, we are always a step ahead from others.
                                        <br/>
                                        We take photos so perfectly that you will feel the same that you had felt in that very special day
                                        <br/>
                                        with your very special one.
                                    </h4>
                                    <button className={classes.button}>View Gellary</button>
                                </section>
                            </div>
                            <div className={classes.newsletters}>
                                <img src="https://solutiondots.com/wp-content/uploads/2016/09/Event-Management-System1.jpg" alt="Placeholder-Image" />
                                <section >
                                    <h1>Ready to take you beyond your imagination!</h1>
                                    
                                    <h4 style={{lineHeight:'2.8rem',letterSpacing:'1px'}}>
                                        With the uniqueness of our concepts and hard working quality, we are always a step ahead from others.
                                        <br/>
                                        We take photos so perfectly that you will feel the same that you had felt in that very special day
                                        <br/>
                                        with your very special one.
                                    </h4>
                                    <button className={classes.button}>View Gellary</button>
                                </section>
                            </div>
            </OwlCarousel>

        
    )
}

export default Slider