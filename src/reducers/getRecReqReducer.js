import * as Map from '../functions/functions';

let recReq = [
  {
    'reqRaised': '',
    'reqRcv': '',
    'loc': '',
    'hmr': '',
    'reqTkn': '',
    'reqStat': ''
  },
  {
    'reqRaised': '',
    'reqRcv': '',
    'loc': '',
    'hmr': '',
    'reqTkn': '',
    'reqStat': ''
  },
];
function devRecRequests(state = { recReq }, action) {
  if (action.type === 'GETREC_REQ') {
    recReq = action.data;
    return Object.assign({}, state, {
      recReq: recReq
    });
  }
  return state;
}

export default devRecRequests;