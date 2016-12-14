import React from 'react';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  Checkbox,
  Button,
  FormControl
} from 'react-bootstrap';
import axios from 'axios';
import {hashHistory} from 'react-router';

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

export default class LoginComponent extends React.Component {
  constructor() {
    super();
    this.input = "";
    this.loginDetails = {};
  }
  submit(event) {
    event.preventDefault();
    this.loginDetails = { 
      'loginUser': this.inputUsername.value, 
      'loginPwd': this.inputPwd.value
    };
    console.log(this.loginDetails);
    axios.post('/loginDetails',this.loginDetails).then(res=>{
      console.log(res.data);
      window.location.replace(res.data);
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row col-md-5 col-md-offset-7'>
          <h3 className='row col-md-offset-6'>Login</h3>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={3}>User Name</Col>
              <Col sm={9}>
                <FormControl inputRef={ref => { this.inputUsername = ref; } } type="text" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>Password</Col>
              <Col sm={9}>
                <FormControl inputRef={ref => { this.inputPwd = ref; } } type="password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={3} sm={9}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={3} sm={9}>
                <Button type='submit' className='col-md-12 btn-success' onClick={this.submit.bind(this)}>Sign in</Button>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={3} sm={9}>
                <Button className='col-md-12 btn-info' href='#/register'>Sign Up</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}