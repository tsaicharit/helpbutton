import React from 'react';
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
              <th>Device ID:</th>
              <td>{}</td>
              <th>Address</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{}</td>
              <th>City</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Vehicle Engine No.</th>
              <td>{}</td>
              <th>Zip Code</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Device SIM No.</th>
              <td>{}</td>
              <th>State</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Device IMEI No.</th>
              <td>{}</td>
              <th>Phone</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Device Total HMR</th>
              <td>{}</td>
              <th>Device Status</th>
              <td>{}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default DevInfoComponent;