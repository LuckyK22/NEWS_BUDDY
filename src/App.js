
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import Footer from './Components/Footer';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



export default class App extends Component{

  
   pageSize = 6
   apiKey = '5d545285a1db43d981e22f4c19401220';

   state = {
    progress:0,
   }

   setProgress = (progress) => {
    this.setState({progress:progress});
   }

    render(){ 


    return(
      <>
      <Router>
        <NavBar />

        <LoadingBar
        color='#ffffff'
        height={1.5}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />

        <Routes>
              
            <Route exact path="/"              element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" head=" "  />       } /> 
            <Route exact path="/business"      element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" head="Business" />      } /> 
            <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" head="Entertainment" /> } /> 
            <Route exact path="/health"        element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" head="Health" />        } /> 
            <Route exact path="/science"       element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" head="Science" />       } /> 
            <Route exact path="/sports"        element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" head="Sports" />        } /> 
            <Route exact path="/technology"    element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" head="Technology" />    } /> 
         
          </Routes> 
        <Footer />
      </Router>
      </>
    )
  }
}