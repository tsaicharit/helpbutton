import { combineReducers } from 'redux';
import getDevReqReducer from './getDevReqReducer';
import getRecReqReducer from './getRecReqReducer';

const reducers = combineReducers({
  getDevReq: getDevReqReducer,
  getRecReq: getRecReqReducer
});

export default reducers;