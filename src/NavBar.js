import React, { Component } from 'react';
import './NavBar.css';
import logo from './everibiteLogo.png';
import fb from './fbIcon.png';
import google from './googleIcon.png';
import login from './login.png';
import { Button, FormGroup, FormControl, Modal} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./LoginForm.css";
import Icon from 'react-icons-kit';
import {shoppingBag} from 'react-icons-kit/fa/';

export default class NavBar extends Component{
constructor(props, context) {
super(props, context);
this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
this.handleShow1 = this.handleShow1.bind(this);
this.state = {
show: false,
show1:false,
show2:false,
email: "",
password: ""
};
}
handleClose() {
this.setState({ show: false , show1: false});
}
handleClose1() {
this.setState({ show2: false });
}
handleShow() {
this.setState({ show: true });
}
handleShow1() {
this.setState({ show1: true });
}
validateForm() {
return this.state.email.length > 0 && this.state.password.length > 0;
}
handleChange = event => {
this.setState({
[event.target.id]: event.target.value
});
}
handleSubmit = event => {
event.preventDefault();
}
render(){
return(

<div style={{fontFamily:"'Roboto', sans-serif",fontWeight:'700'}} className="navPart">
  <div>
    <div className="everibite-bar everibite-white everibite-card" id="myNavbar">
    <Link to="/"><span><img src={logo} className="" alt="logo" /></span></Link>
    <div className="everibite-right everibite-hide-small">
            {/*<Link to="/MyAccount" className="everibite-bar-item everibite-button">MyAccount</Link>
	<Link to="/RegistrationProcess" className="everibite-bar-item everibite-button">RegistrationProcess</Link>
<Link to="/OrdersCopy" className="everibite-bar-item everibite-button">OrdersCopy</Link>
<Link to="/UserFeedback" className="everibite-bar-item everibite-button">UserFeedback</Link>
<Link to="/OrderCopy" className="everibite-bar-item everibite-button">OrderCopy</Link>
<Link to="/ProfilePopup" className="everibite-bar-item everibite-button">ProfilePopup</Link>
<Link to="/Checkout" className="everibite-bar-item everibite-button">Checkout</Link>
<Link to="/Vieworder" className="everibite-bar-item everibite-button">Vieworder</Link>
<Link to="/LandingPage" className="everibite-bar-item everibite-button">LandingPage</Link>
<Link to="/RestaurantPage" className="everibite-bar-item everibite-button">RestaurantPage</Link>
<Link to="/Review" className="everibite-bar-item everibite-button">Review</Link>
<Link to="/HotelCart" className="everibite-bar-item everibite-button">HotelCart</Link>*/}


            <Button className="everibite-bar-item everibite-button px-5 py-2 navBtn"  onClick={this.handleShow} style={{background:'#6cc018',color:'#fff'}}>
                  LOGIN
            </Button>
            <div className="everibite-right everibite-hide-small">
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>            
            </Modal.Header>
            <Modal.Body className="p-5">
            <div className="everibite-top">
            <form onSubmit={this.handleSubmit}>
<img src={login} alt="fbIcon" className="float-left mr-4"/>
            <Modal.Title className="d-inline-block mt-3 mb-5">
            <h2 className="" style={{color:'#2a830c',fontFamily:"'Viga',sans-serif"}}>Login</h2>
            <h4 style={{color:'#666',fontFamily:"'Roboto',sans-serif",fontWeight:'400'}}>Existing User Login With Your Account</h4>
            </Modal.Title>
            <FormGroup controlId="email" bsSize="large">
            <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Phone Number/ Email ID"
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            />
            </FormGroup>
<a href="#" className="float-right mb-4 text-success" onClick={this.handleShow1}>New User? ClickHere</a>
            <a href="#" className="float-right mb-4 text-success mr-5" style={{fontFamily:"'Roboto',sans-serif",fontWeight:'400'}}>Forgot Password ?</a>
		
            <Link to="/LandingPage"><Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4 text-white" style={{fontFamily:"'Viga',sans-serif",background:'#2a830c'}}
            >
            Login
            </Button></Link>
            <Button
            block   bsSize="large"
            className="my-3 text-white" style={{background:'#3a559f'}}><img src={fb} alt="fbIcon" className="bg-white pr-1 mr-3" />
            SIGNIN WITH FACEBOOK</Button>
            <Button
            block   bsSize="large" bsStyle="default"
            style={{color:'#6a6969'}}><img src={google} alt="googleIcon" className="mr-3 bg-white"/>
            SIGNIN WITH GOOGLE</Button>
            </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose} >Close</Button>
            </Modal.Footer>
            </Modal>




            <Button className="everibite-bar-item everibite-button px-5 py-2 mx-3 navBtn" onClick={this.handleShow1} style={{background:'#6cc018',color:'#fff'}}>
            REGISTER
            </Button>
            <Modal show={this.state.show1} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
              
            <Modal.Body>
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
            <Modal.Title className="mb-5">
            <h2 className="text-success" style={{fontFamily:"'viga',sans-serif",color:'#2a830c'}}>New User</h2>
            <h4 style={{fontFamily:"'Roboto',sans-serif",fontWeight:'400',color:'#666'}}>Register Now ! and Create an Account</h4>
            </Modal.Title>
            <FormGroup controlId="usename" bsSize="large">

            <FormControl
            autoFocus
            type="text"
            placeholder="Name"
            value={this.state.username}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="phonenumber" bsSize="large">

            <FormControl

            type="tel"
            placeholder="Phone Number"
            value={this.state.phonenumber}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">

            <FormControl

            type="email"
            placeholder="Email ID"
            value={this.state.email}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            />

		 <FormControl
            value={this.state.confirmpassword}
            onChange={this.confirmhandleChange}
            type="password"
            placeholder="ConfirmPassword"
            />
            </FormGroup>

            <Link to="/RegistrationProcess"><Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4 text-white"
            style={{background:'#6cc018',fontFamily:"'viga',sans-serif"}}>
            Register
            </Button></Link>
            </form>
            <h5 className="text-center mt-3">By Creating an account, <a href="#" className="text-success">I accept the Terms & Conditions</a></h5>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
           
<Icon icon={shoppingBag} className="text-success mt-4 mr-3" size={18}/>      
      </div>
      </div>

    </div>
   </div> 

</div>
);
}
}
