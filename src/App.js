import React from "react";
import Pricing from "./pages/pricing/pricing";
import Signup from "./pages/signup/Signup";
import Discover from "./pages/discover/discover";
import Home from "./pages/home/home";
import Signin from './pages/signin/Signin';
import MovieDetails from "./pages/movie-details/movie-details.jsx";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component{
    constructor(){
      super()

      this.state = {
          currentUser : null
      }
    }

    unSubscribeFromAuth = null

    componentDidMount(){
      this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfile( userAuth );

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        }

        this.setState({ currentUser: userAuth});
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path='/signin' render={() => this.state.currentUser? (<Redirect to= '/discover' />) : <Signin/>}/>
          <Route exact path="/view/:type/:id" component={MovieDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
