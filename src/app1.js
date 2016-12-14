import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Button, FormGroup, FormControl, Col, ControlLabel, Form } from 'react-bootstrap';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import RequestComponent from '../src/components/requestsComponent';
import AllDataComponent from '../src/components/allDataComponent';


class HomeApplication extends React.Component {
  constructor() {
    super();
    this.userName = 'Admin';
  }
  requestsBtn(e) {
    e.preventDefault();
    hashHistory.push('/requests');
  }
  allDataBtn(e) {
    e.preventDefault();
    hashHistory.push('/allData');
  }
  searchBtn(e){
    e.preventDefault();
    console.log('search');
  }
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
              Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
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
                    <FormControl type="text" placeholder="Search" />
                  </Col>
                  <Col sm={3}>
                    <Button type='submit' onClick={this.searchBtn.bind(this)}>Search</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Navbar.Form>
            <Button onClick={this.requestsBtn.bind(this)}>Requests</Button>
            <Button onClick={this.allDataBtn.bind(this)}>All Data</Button>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={HomeApplication}>
      <IndexRoute component={RequestComponent} />
      <Route path='/requests' component={RequestComponent}/>
      <Route path='/allData' component={AllDataComponent}/>
    </Route>
  </Router>
  , document.getElementById('app1')
)