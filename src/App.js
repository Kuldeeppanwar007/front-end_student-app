import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/layout/Navbar'
import Footer from "./component/layout/Footer"
import Logout from './component/layout/Logout';
import Login from './component/pages/Login';
import Registration from './component/pages/Registration';
import Home from "./component/pages/Home"
import DocumentUpload  from "./component/pages/DocumentUpload"


const App = ()=> {
  return (
    
      
      <>
      <Router>
        <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
      <Route exact path="/Registration" component ={Registration} />
      <Route exact path="/Login" component ={Login} />
      <Route exact path="/DocumentUpload" component ={DocumentUpload} />
      <Route exact path="/Logout" component ={Logout} />
      </Switch>
      {/* <Registeration /> */}
      </Router>
      <Footer />
      </>    
    
  );
}

export default App;
