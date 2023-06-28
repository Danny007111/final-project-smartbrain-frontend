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
  render() {
    return (
    <div className="App">
      <Particles className='particles' options={particlesOptions} init={loadFull}/>      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
    );
  }
}

export default App;