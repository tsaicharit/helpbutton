import React from 'react';
import axios from 'axios';

export default class RequestComponent extends React.Component{
  constructor(){
    super();
  }
  componentWillMount(){
    let sessionID = sessionStorage.getItem('searchID');
    axios.get('/getAllData:'+sessionID).then(res=>{
      console.log(res);
    })
  }
  render(){
    return(
      <div>
        all data
      </div>
    )
  }
}