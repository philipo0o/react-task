import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
   super()
   this.state={time:new Date()}


  }

  currentTime()
  {
    this.setState({ time:new Date()})
  }
   
  componentWillMount()
  {
    setInterval(()=>this.currentTime(),1000)  
  } 
  

   


 
  render() {
    return (
      <div className="App" id="app"  style={{  backgroundImage: "url(" + "http://lorempixel.com/1400/1000" + ")"}}>
        <header className="App-header">

         
        <h1>
        {this.state.time.toLocaleTimeString()}
         </h1>
         <h3>hello philip</h3>
        </header>
      </div>
      
     
      
    );
  }
}

export default App;

