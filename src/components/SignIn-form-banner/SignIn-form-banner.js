import React from 'react';
import {auth} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

import BannerMovieHub from './../SignIn-movieHub/SignIn-movieHub';
import "./SignIn-form-banner.css";


class signInBannerForm extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
          await auth.signInWithEmailAndPassword(email, password) 
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        const { email, password } = this.state;
        return(
            <div className="SignIn-form-banner-Img">
                <div className="form-div">
                <BannerMovieHub/>
                   <form action="">
                       <label htmlFor="email">Email or Username</label>
                        <input type="email" name="email" value = {email} onChange={this.handleChange}/>
                       <label htmlFor="password">Password</label>
                       <input type="password"name="password"  id="password" value = {password} onChange={this.handleChange}/>
                        
                        <button type="submit" className="SignIn-btn">Sign In</button>
                        <a href="#" className ="forgot-password">forgot password</a>
                       <hr/>
                        <a href="#"className ="account">Don't have an account</a>
                        <button className="submit-btn" type="submit" > <Link className='sign-up-link' to= '/sign-up' >Create an account</Link></button>
                   </form>
                </div>
            </div>
        )
    }


}

export default signInBannerForm;