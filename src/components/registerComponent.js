import React from 'react';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import axios from 'axios';
import * as filter from '../filters/filters';

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
let option;
export default class Route2 extends React.Component {
  constructor() {
    super();
    this.data = {};
    this.state = {
      options: []
    };
    this.registerData = {};

    this.changeEvent = this.changeEvent.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
  }
  componentWillMount() {
    let promiseData = axios.get('./src/json/jsonCountries.json').then(res => {
      this.setState({
        options: res.data
      });
    });
  }
  changeEvent() {
    this.name.value = filter.charecters(this.name.value);
    this.devID.value = filter.numCharCap(this.devID.value);
    this.devMobNum.value = filter.mobNumber(this.devMobNum.value);
    this.phone.value = filter.mobNumber(this.phone.value);
  }
  registerSubmit(event) {
    event.preventDefault();
    let gender = '';
    if (this.refs.genderM.checked === true) {
      gender = 'Male';
    } else {
      gender = 'Female';
    }
    this.registerData = {
      'devID': this.devID.value,
      'devMobNum': this.devMobNum.value,
      'engineNo': this.engineNo.value,
      'name': this.name.value,
      'gender': gender,
      'address': this.address.value,
      'city': this.city.value,
      'zipCode': this.zipCode.value,
      'state': this.state.value,
      'phone': this.phone.value,
      'email': this.email.value,
      'country': this.refs.country.value
    };
    
  }
  render() {
    return (
      <div className='container'>
        <div className='row col-md-5 col-md-offset-7'>
          <h2 className='col-md-offset-5'>Register a Device</h2>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={4}>Device ID</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.devID = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Device SIM No.</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.devMobNum = ref; } } onChange={this.changeEvent} placeholder="Country Code not Required" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Vehicle Engine No.</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.engineNo = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Full Name</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.name = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Gender</Col>
              <Col sm={8}>
                <input type='radio' name='gender' defaultChecked ref='genderM' /> Male <input type='radio' name='gender' /> Female
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Address</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.address = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>City</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.city = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Zip Code</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.zipCode = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>State</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.state = ref; } } onChange={this.changeEvent} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Country</Col>
              <Col sm={8}>
                <select className='form-control' ref='country' defaultValue='IN'>
                  {this.state.options.map((option, index) => {
                    return <option key={index} value={option.code}>{option.name}</option>
                  })}
                </select>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Phone</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.phone = ref; } } onChange={this.changeEvent} placeholder="Country Code not Required" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>Email</Col>
              <Col sm={8}>
                <FormControl type="text" inputRef={ref => { this.email = ref; } } onChange={this.changeEvent} placeholder='mail@email.com' />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={4} sm={8}>
                <Button type="submit" className='col-md-12 btn-info' onClick={this.registerSubmit}>Register</Button>
              </Col>
            </FormGroup>

          </Form>
        </div >
      </div>
    )
  }
}