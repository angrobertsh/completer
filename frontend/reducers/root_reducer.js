import { combineReducers } from 'redux';
import CompleterReducer from './completer_reducer';

const RootReducer = combineReducers({
  completer: CompleterReducer
});

export default RootReducer;
