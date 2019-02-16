import {combineReducers} from 'redux';
import rateReducer from './rate';

export default combineReducers({
	rate: rateReducer
})