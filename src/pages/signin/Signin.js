import React from 'react';
import BannerSignIn from '../../components/banner-signIn/banner-signIn';
import BannerSignInForm from '../../components/SignIn-form-banner/SignIn-form-banner';
import BannerMovieHub from '../../components/SignIn-movieHub/SignIn-movieHub';
import './signin.css';
import Nav from '../../components/nav/nav.component';


function Signin() {
    return (
       <div className= "SignIn">
          <div className="SignIn-form">
           <BannerSignInForm/>
          </div>
          <div className="intro">
          <div className="intro-h2">
            <BannerSignIn/>
            {/* <h2>Watch the best movies on the Go.</h2> */}
            </div>
          </div>
       </div>
       
    );
}

export default Signin;
  