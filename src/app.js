import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  NavbarHeader,
  Table,
  Form,
  FormGroup,
  Col,
  FormControl,
  Checkbox,
  ControlLabel,
  Button
} from 'react-bootstrap';
import LoginComponent from './components/loginComponent';
import RegisterComponent from './components/registerComponent';

let imgLogoStyle = {
  'width': '170px',
  'backgroundColor': 'white',
  'padding': '5px'
}

let paddingZero = {
  padding: '0px'
}

let fixedWidth = {
  width: '80% !important'
}

let loginFormWidth = {
  width: '30%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

let registerFormWidth = {
  width: '40%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              {/*<a href="#/home" style={paddingZero}>
                <img style={imgLogoStyle} src="http://mythriconsulting.com/wp-content/plugins/LayerSlider/static/img/logo.png" />
              </a>}
              {/*<Link to="/home" style={paddingZero}>
                <img style={imgLogoStyle} src="http://mythriconsulting.com/wp-content/plugins/LayerSlider/static/img/logo.png" />
              </Link>*/}
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#/home">Home</NavItem>
            <NavItem eventKey={2} href="#/login">Login</NavItem>
            <NavItem eventKey={3} href="#/register">Register</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div >
    )
  }
}

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/login' component={LoginComponent} />
      <Route path='/register' component={RegisterComponent} />
    </Route>
  </Router>

  , document.getElementById('app'));