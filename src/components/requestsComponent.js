import React from 'react';
import { Table } from 'react-bootstrap';
import * as Map from '../functions/functions';

export default class RequestComponent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let loc = '17.422217, 78.382042';
    Map.geocodeLatLng(loc, (err,resp) => {
      console.log(resp);
    });
  }
  render() {
    return (
      <div className='container'>
        <Table striped bordered condensed hover responsive className='text-center'>
          <thead>
            <tr>
              <th className='text-center'>S.No</th>
              <th className='text-center'>Request Raised (Client)</th>
              <th className='text-center'>Request Received (Server)</th>
              <th className='text-center'>Location</th>
              <th className='text-center'>Request Token No.</th>
              <th className='text-center'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>15-12-2016</td>
              <td>15-12-2016</td>
              <td></td>
              <td>00000002</td>
              <td>Initiated</td>
            </tr>
            <tr>
              <td>2</td>
              <td>14-12-2016</td>
              <td>14-12-2016</td>
              <td></td>
              <td>00000001</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}