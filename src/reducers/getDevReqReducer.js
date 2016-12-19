var devData = {
  'deviceID': '',
  'regName': '',
  'vehEngName': '',
  'devSimNo': '',
  'devIMEINo': '',
  'devTotalHMR': '',
  'address': '',
  'city': '',
  'zipCode': '',
  'state': '',
  'devStatus': '',
  'regNum': ''
};
function devRequests(state = { devData }, action) {
  if (action.type === 'GETDEV_REQDATA') {
    devData = action.data;
    return Object.assign({}, state, {
      devData: devData
    })
  }
  return state;
}

export default devRequests;