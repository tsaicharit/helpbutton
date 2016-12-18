import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Button, FormGroup, FormControl, Col, ControlLabel, Form, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import RequestComponent from '../src/components/requestsComponent';
import AllDataComponent from '../src/components/allDataComponent';
import axios from 'axios';
import * as Filter from '../src/filters/filters';
import * as Map from '../src/functions/functions';


class HomeApplication extends React.Component {
  constructor() {
    super();
    this.userName = 'Admin';
    this.searchDetails = {};

    this.inputOnChange = this.inputOnChange.bind(this);
  };
  inputOnChange() {
    this.searchInput.value = Filter.numCharCap(this.searchInput.value);
  };
  requestsBtn(e) {
    e.preventDefault();
    hashHistory.push('/requests');
  };
  allDataBtn(e) {
    e.preventDefault();
    hashHistory.push('/allData');
  };
  searchBtn(e) {
    e.preventDefault();

    console.log(this.searchInput.value);
    if(this.searchInput.value.length < 8){
      alert('Device ID to be 8 Characters');
      return;
    }
    this.searchDetails = {
      searchID: this.searchInput.value
    }
    axios.post('/searchDetails', this.searchDetails).then(res => {
      console.log(res.data);
      hashHistory.push('/requests');
    });
  };
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>
              Signed in as: <Navbar.Link href="#">{this.userName}</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text className='row col-md-6 text-center headingNav'>
              Heading
            </Navbar.Text>
            <Navbar.Text pullRight><Navbar.Link href="#">Sign Out</Navbar.Link></Navbar.Text>
            <Navbar.Text pullRight>Have a great day!</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Navbar className='clrBgWhite'>
          <Navbar.Collapse>
            <Navbar.Form>
              <Form horizontal className='col-md-5'>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3}>Device ID</Col>
                  <Col sm={6}>
                    <FormControl type="text" inputRef={ref => { this.searchInput = ref } } onChange={this.inputOnChange} />
                  </Col>
                  <Col sm={3}>
                    <Button className='newClr' type='submit' onClick={this.searchBtn.bind(this)}>Search</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Navbar.Form>
            <Button onClick={this.requestsBtn.bind(this)}>Requests</Button>
            <Button onClick={this.allDataBtn.bind(this)}>All Data</Button>
          <p className='devClsStat'>Device Status: {}</p>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    )
  };
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={HomeApplication}>
      <IndexRoute component={RequestComponent} />
      <Route path='/requests' component={RequestComponent} />
      <Route path='/allData' component={AllDataComponent} />
    </Route>
  </Router>
  , document.getElementById('app1')
);