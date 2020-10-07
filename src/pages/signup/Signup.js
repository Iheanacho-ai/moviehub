import React from 'react';
import { Link } from 'react-router-dom';
import { auth, createUserProfile } from '../../firebase/firebase.utils';
import Nav from '../../components/nav/nav.component';
import './signup.css';

class Signup extends React.Component{
  constructor(){
    super()
    this.state = {
      email: '',
      confirmEmail: '',
      password : '',
      confirmPassword: ''
    }

  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, confirmEmail, password, confirmPassword} = this.state;

    if (email === confirmEmail && password === confirmPassword) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfile(user);

        this.setState({
          email: '',
          confirmEmail: '',
          password : '',
          confirmPassword: ''
        })

        
      } catch (error) {
        console.log(error)
      }
      
    } else {
      alert('Please crosscheck your signin details');
      return
    }

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }



  render(){
    const {email, confirmEmail, password, confirmPassword} = this.state;

    return(
      <div className="sign-up">
        <Nav />
        <div className='sign-up-body'>
          <div
            className="signupcontainer text-center"
            style={{  }}
          >
            <h1>Sign Up</h1>
            <form>
              <div className="form-group">
                <label for="Email1">Email</label>
                <input name= 'email' type="email" className="form-control " id="Email1" value = {email} onChange= {this.handleChange} />
              </div>
              <div className="form-group">
                <label for="Email2">Confirm email</label>
                <input name= 'confirmEmail'  type="email" className="form-control" id="Email2" value = {confirmEmail} onChange= {this.handleChange} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name= 'password' type="password" className="form-control" id="password1"value = {password} onChange= {this.handleChange}/>
              </div>
              <div class="form-group">
                <label for="password2">Confirm Password</label>
                <input name= 'confirmPassword' type="password" className="form-control" id="password" value = {confirmPassword} onChange= {this.handleChange} />
              </div>
              <button
                type="submit"
                className="btn btn-danger"
                style={{ background: '#FF0000', width: '350px', marginTop: '10px' }}
                onClick = {this.handleSubmit}
              >
                Sign Up
              </button>
              <p style={{ color: '#808584' }}>
                already have an account? <Link to="/signin">Sign in</Link> instead
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  };
}

export default Signup;
  