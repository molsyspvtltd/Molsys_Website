import React from 'react';
import '../style/Footer.css'
import LogoMolsys from "../assets/LogoMolsys.png";
import footer from '../assets/footer_makeachange.jpg';


function Footer() {

  return (
    
<section id="footer" class="section-1" style={{backgroundImage: `url(${footer})`, backgroundSize: "cover"} }>
		
			<div class="row text-center text-xs-center text-sm-left text-md-left mx-5">

				<div class="col-xs-6 col-sm-3 col-md-3">
					<h5 class="h5"><small><b>Resources</b></small></h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/privacypolicy"><i class="fa fa-angle-double-right"></i>Privacy Policy</a></li>
						<li><a href="/register"><i class="fa fa-angle-double-right"></i>Sign Up</a></li>
						<li><a href="/privacypolicy"><i class="fa fa-angle-double-right"></i>FAQ's</a></li>
					</ul>
				</div>

				<div class="col-xs-6 col-sm-3 col-md-3">
					<h5 class="h5-1"><small><b>About</b></small></h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/AboutUs"><i class="fa fa-angle-double-right"></i>Our Story</a></li>
						<li><a href="/contactUs"><i class="fa fa-angle-double-right"></i>Contact Us</a></li>
						<li><a href="/careers"><i class="fa fa-angle-double-right"></i>Careers</a></li>
					</ul>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-6 mt-4">
           			<img src={LogoMolsys} alt="New Image" style={{height:'130px', width:'220px'}} />
          		</div>

				<div class="col-xs-12 col-sm-6 col-md-6 mt-sm-4">
					<ul class="list-unstyled list-inline social text-center">
        			    <li class="list-inline-item mx-2"><a href="https://www.linkedin.com/company/molsys/about/;"><i class="fa fa-linkedin"></i></a></li>
						<li class="list-inline-item mx-2"><a href="https://www.facebook.com/molsys/"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item mx-2"><a href="https://twitter.com/molsys?lang=en"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item mx-2"><a href="https://www.instagram.com/molsys_scientific/?hl=en"><i class="fa fa-instagram"></i></a></li>
            				<div className="col text-center mt-3">
            					<input type="email" placeholder="Enter your mail" className='btn btn-outline-secondary' />
           						<button type="submit" className='btn btn-sucess shadow btn-outline-secondary'>Submit</button><br/>
           						<input type="checkbox" id="permission" name="permission " className='mt-3'/>
           						<label htmlFor="permission" class="mx-2">Allow access to data</label>
           					</div>
					</ul>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-6">

        		  </div>

				{/* <div class="col-xs-12 col-sm-6 col-md-6 mt-5 text-center text-white">
          <p style={{color:'black'}}><b><small>&copy; 2022 Copyright Molsys Pvt. Ltd.</small></b></p>
		</div> */}

	</div>	

   </section>
  )
}

export default Footer



