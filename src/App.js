import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import './App.css';
import particlesOptions from './particles.json';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
// no need to iport clarifai because we are using fetch with my api key.
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '931a184388594bb8b6e6f16e7e6f1697'
//  });

// Clarifai face detection api 06/2023
// ---------------Sent to back end---VVVV---------------------
// const returnClarifaiRequestOptions = (imageUrl) => {
//       // Your PAT (Personal Access Token) can be found in the portal under Authentification
//   const PAT = '3113f221360c4d4791d3ffcd4725c74a';
//   // Specify the correct user_id/app_id pairings
//   // Since you're making inferences outside your app's scope
//   const USER_ID = 'danny007111';       
//   const APP_ID = 'my-first-application-60g1nn';
//   // Change these to whatever model and image URL you want to use
//   // const MODEL_ID = 'face-detection';
//   // deleted model-version-id  
//   const IMAGE_URL = imageUrl;

//   const raw = JSON.stringify({
//     "user_app_id": {
//         "user_id": USER_ID,
//         "app_id": APP_ID
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                      "url": IMAGE_URL
//                     }
//                   }
//               }
//           ]
//     });

//   const requestOptions = {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Key ' + PAT
//     },
//     body: raw
//   };

//   return requestOptions;
// }
// -------------------------------

const initialState = {
  // text box input
  input: '',
  // https://samples.clarifai.com/metro-north.jpg , https://samples.clarifai.com/brangelina_video_3_1fps.jpeg ,
  imageUrl: '',
  // holds value/s of faces(squares) found on photo.
  box: {},
  // keeps track of where we are at in the page
  route: 'signin',
  //sign in state
  isSignedIn: false,
  //register.js (user) 
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

// -------------------------------

class App extends Component {
  constructor(){
    super();
    // -------------------------------
    this.state = initialState;
    // -------------------------------

  }
  
  // register.js ---VVVV
  ////----------------------------------
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
  
  ////----------------------------------

  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   // could do .then(console.log)to log out "data"
  // }

  ////---------------CLARIFAI-------------------VVV

  calculateFaceLoation = (data) => {

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    // const clarifaiFace = data.outputs[0].data.regions[0].data.region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    
  }
  ////----------------CLARIFAI-------------------VVV
  displayFaceBox = (boxes) => {
    this.setState({box: boxes});
  }
  ////-----------------------------------

  // when trying to use function onInputChange we have to use "this." to acces the function of App before it renders.
  onInputChange = (event) => {
    // the way we get a value is 'event.target.value'
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    // when button is pressed input becomes imageUrl and executes code.
    this.setState({imageUrl: this.state.input});
    // ---------------Sent to back end---VV("imageurl")VV---------------------
    // fetch("https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs", returnClarifaiRequestOptions(this.state.input))
    // -----------------------------------------------------------
    fetch('https://smartbrain-api-srq6.onrender.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
        })
    })
      // ------------------------------------

    .then(response => response.json())
    .then(response => {
      console.log(response)
      if(response) {
        
        fetch('https://smartbrain-api-srq6.onrender.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
          // Object.assign ----(where, {what})---- targets only specific values so the whole user is not modified to have other entries as "undefined" (nothing, blank!)
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(console.log);
      }
      // close att. We have response being catched by calculateFaceLocation
      this.displayFaceBox(this.calculateFaceLoation(response));
      })
    .catch((error) => console.log('error', error));  
  }
   //// old clarify_______________VVVVVVVVVVVVVVVVV______________
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    // .then( 
    //   function(responce){
    //     // do something
    //     console.log(responce.outputs[0].data.regions[0].region_info.bounding_box)
    //   },
    //   function(err) {
    //     // there was an error
    //   }
    // );
  ////__________________________________________________________    

  onRouteChange = (route) => {
    if(route === 'signout'){
      // this.setState({isSignedIn: false}) canceled out for bug when registering another user
      //  before pic of other user stays there. So we need to declare initialState to clear everything
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  

  render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App">
        <Particles className='particles' options={particlesOptions} init={loadFull}/> 
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /> 
        { route === 'home' 
        ? <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
        : (
            route === 'signin' 
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />   
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />   
          )
        }
      </div>
    );
  };
}

export default App;