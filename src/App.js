import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import './App.css';
import particlesOptions from "./particles.json";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


// function App() {
//   const particlesInit = useCallback(main => {
//       loadFull(main);
//   }, [])

//   return (
//       <div className="App">
//           <Particles className='particles' options={particlesOptions} init={particlesInit}/>
//           <Navigation />
//           <Logo />
//           <Rank />
//           <ImageLinkForm />
//           {/* <FaceRecognition /> */}
//       </div>
//   );
// }
// export default App;



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  // when trying to use function onInputChange we have to use "this." to acces the function of App before it renders.
  onInputChange = (event) => {
    // the way we get a value is 'event.target.value'
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
        console.log('click')
    // // URL of image to use. Change this to your image.
    // const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

    // const raw = JSON.stringify({
    //   "user_app_id": {
    //     "user_id": "clarifai",
    //     "app_id": "main"
    //   },
    //   "inputs": [
    //       {
    //           "data": {
    //               "image": {
    //                   "url": IMAGE_URL
    //               }
    //           }
    //       }
    //   ]
    // });

    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Authorization': 'Key ' + '3113f221360c4d4791d3ffcd4725c74a'
    //     },
    //     body: raw
    // };

    // // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // // this will default to the latest version_id

    // fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
      
  }

  render() {
    return (
    <div className="App">
      <Particles className='particles' options={particlesOptions} init={loadFull}/>      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      {/* <FaceRecognition /> */}
    </div>
    );
  }
}

export default App;