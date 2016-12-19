import React from 'react';
import { connect } from 'react-redux';
import {
  Table
} from 'react-bootstrap';

class DevInfoComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Table responsive>
          <tbody>
            <tr>
              <th className='col-md-2'>Device ID:</th>
              <td className='col-md-4'>{this.props.devData.deviceID}</td>
              <th className='col-md-2'>Address</th>
              <td className='col-md-4'>{this.props.devData.address}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{this.props.devData.regName}</td>
              <th>City</th>
              <td>{this.props.devData.city}</td>
            </tr>
            <tr>
              <th>Vehicle Engine No.</th>
              <td>{this.props.devData.vehEngName}</td>
              <th>Zip Code</th>
              <td>{this.props.devData.zipCode}</td>
            </tr>
            <tr>
              <th>Device SIM No.</th>
              <td>{this.props.devData.devSimNo}</td>
              <th>State</th>
              <td>{this.props.devData.state}</td>
            </tr>
            <tr>
              <th>Device IMEI No.</th>
              <td>{this.props.devData.devIMEINo}</td>
              <th>Phone</th>
              <td>{this.props.devData.regNum}</td>
            </tr>
            <tr>
              <th>Device Total HMR</th>
              <td>{this.props.devData.devTotalHMR}</td>
              <th>Device Status</th>
              <td>{this.props.devData.devStatus}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    devData: state.getDevReq.devData
  }
}

export default connect(mapStateToProps)(DevInfoComponent);