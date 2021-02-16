import  React from 'react';
import classes from  './footer.module.css';

const footer = (props) => {
    return (
    <footer className={classes.footer_area}>
		<div class="container mt-5 p-5 ">
			<div class="row footer_inner d-flex justify-content-between mt-5 mb-5">
				<div class="col-lg-6 col-sm-6 mt-5">
					<aside class="f_widget ab_widget ">
						<div class="f_title mb-5">
							<h3 className={classes.title}>Dhaka Office</h3>
						</div>
						<p className={classes.about}> House#23,Road#1,Sector#9,Uttara. Dhaka, Bangladesh 1230</p>
						<p className={classes.about}> iftisk9@gmail.com</p>
						<p className={classes.about}> +88 01961225925</p>

						
					</aside>
					<aside class="f_widget ab_widget mt-5 ">
						<div class="f_title mb-5">
							<h3 className={classes.title}>Dhaka Office</h3>
						</div>
						<p className={classes.about}> House #12, Road #02 , Uttara</p>
						<p className={classes.about}> iftisk9.bd@gmail.com</p>
						<p className={classes.about}> +88 01961225925</p>

						
					</aside>
				</div>
				
				<div class="col-lg-4 col-sm-6 mt-5  ">
					<aside class="f_widget social_widget">
						<div class="f_title">
							<h3 className={classes.title }>Follow Me</h3>
						</div>
						<p className={classes.about} style={{marginTop:"30px"}} >Let me be social</p>
						<ul className={classes.personal_social}>
							<li><a href="https://www.facebook.com/iftsk9" target="_blank"><i
										class="fa fa-facebook"> Facebook</i></a>
							</li>
							<li><a href="#" target="_blank"><i
										class="fa fa-linkedin"></i> linkedin</a></li>
							<li><a href="https://github.com/ifta5925" target="_blank"><i class="fa fa-github"> Github</i></a>
							</li>
							<li><a href="#" target="_blank"><i
										class="fa fa-instagram"> Instagram</i></a>
							</li>
							<li><a href="https://www.youtube.com/"
									target="_blank"><i class="fa fa-youtube"></i> Youtube</a></li>
						</ul>
					</aside>
				</div>
				<div class="col-lg-12">
				<img src="//i0.wp.com/dreamweaver.com.bd/wp-content/uploads/2020/04/sslc-footer.png" style={{width:'70%'}}/>
				</div>
				<div class="col-lg-12 col-sm-5 mt-5" >
				<p className={classes.copyright}>
							Copyright &copy;<a href="#" target="_blank">Team Ifti</a>
						</p>
				</div>
			</div>
			
		</div>
	</footer>

    )
}
export default footer;