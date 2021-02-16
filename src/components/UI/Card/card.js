import React from "react";
import classes from './card.module.css';
import Images3 from "../../../assets/images/couple-2.jpg";

const Card = () => {

    return (


        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                    <div className={classes.card} >
                        <div className={classes.imgBx}>
                            <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                        </div>
                        <div className={classes.details}>
                            <h2>SomeOne Famous<br /><span>Director</span></h2>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
export default Card