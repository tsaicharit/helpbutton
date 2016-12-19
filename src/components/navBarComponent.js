import React from 'react';
import { Navbar, Button, FormGroup, FormControl, Col, ControlLabel, Form, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import * as Filter from '../filters/filters';
import * as Map from '../functions/functions';

class NavBarComponent extends React.Component {
  constructor() {
    super();
    this.userName = 'Admin';
    this.searchDetails = {};
    this.inputOnChange = this.inputOnChange.bind(this);
  }

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

    if (this.searchInput.value.length < 8) {
      alert('Device ID to be 8 Characters');
      return;
    }
    this.searchDetails = {
      searchID: this.searchInput.value
    }
    axios.post('/getDeviceInfo', this.searchDetails).then(res => {
      this.props.getDevData(res.data);
    });
    axios.post('/getRecentRequests', this.searchDetails).then(res => {
      this.props.getRecReq(res.data);
    })
  };

  render() {
    let devStatus;
    if(this.props.devData.devStatus === 'Working'){
      devStatus = <span className='text-success'>Working</span>
    }else if(this.props.devData.devStatus === 'No Communication'){
      devStatus = <span className='text-warning'>{this.props.devData.devStatus}</span>
    }
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
            <p className='devClsStat'>Device Status: {devStatus}</p>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    devData: state.getDevReq.devData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDevData: function (devID) {
      dispatch({
        type: 'GETDEV_REQDATA',
        data: devID
      });
    },
    getRecReq: function (devID) {
      dispatch({
        type: 'GETREC_REQ',
        data: devID
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);