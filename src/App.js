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
    console.log('click');
  }

  render() {
    return (
    <div className="App">
      <Particles className='particles' options={particlesOptions} init={loadFull}/>      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit} />
      {/* <FaceRecognition /> */}
    </div>
    );
  }
}

export default App;