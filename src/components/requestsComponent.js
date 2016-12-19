import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Map from '../functions/functions';
import DevInfoComponent from './devInfoComponent';

class RequestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      location1: sessionStorage.getItem('loc0'),
      location2: sessionStorage.getItem('loc1'),
    }
  }

  componentDidUpdate() {
    Map.geocodeLatLng(this.props.recReq[0].loc, res => {
      this.setState({
        location1: res
      });
      sessionStorage.setItem('loc0',res);
    });
    Map.geocodeLatLng(this.props.recReq[1].loc, res => {
      this.setState({
        location2: res
      });
      sessionStorage.setItem('loc1',res);
    })
  }

  render() {
    return (
      <div className='container'>
        <h3>Device Information:</h3>
        <DevInfoComponent />
        <hr />
        <h3>Recent 2 Request's:</h3>
        <Table striped bordered condensed hover responsive className='text-center'>
          <thead>
            <tr>
              <th className='text-center'>S.No</th>
              <th className='text-center'>Request Raised (Client)</th>
              <th className='text-center'>Request Received (Server)</th>
              <th className='text-center'>Location</th>
              <th className='text-center'>HMR @ Recorded</th>
              <th className='text-center'>Request Token No.</th>
              <th className='text-center'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{this.props.recReq[0].reqRaised}</td>
              <td>{this.props.recReq[0].reqRcv}</td>
              <td className="tableCellWidth">{this.state.location1}</td>
              <td>{this.props.recReq[0].hmr}</td>
              <td>{this.props.recReq[0].reqTkn}</td>
              <td>{this.props.recReq[0].reqStat}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{this.props.recReq[1].reqRaised}</td>
              <td>{this.props.recReq[1].reqRcv}</td>
              <td>{this.state.location2}</td>
              <td>{this.props.recReq[1].hmr}</td>
              <td>{this.props.recReq[1].reqTkn}</td>
              <td>{this.props.recReq[1].reqStat}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recReq: state.getRecReq.recReq
  }
}

export default connect(mapStateToProps)(RequestComponent);