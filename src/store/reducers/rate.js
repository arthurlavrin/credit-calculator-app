import {FETCH_RATES_ERROR, FETCH_RATES_START, FETCH_RATES_SUCCESS} from '../actions/actionTypes';

const initialState = {
	data: [],
	loading: false,
	error: null
}

export default function rateReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_RATES_START:
			return {
				...state, loading: true
			}
		case FETCH_RATES_SUCCESS:
			return {
				...state, loading: false, data: action.data
			}
		case FETCH_RATES_ERROR:
			return {
				...state, loading: false, error: action.error
			}
		default:
			return state
	}
}