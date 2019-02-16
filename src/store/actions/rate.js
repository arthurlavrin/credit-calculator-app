import {FETCH_RATES_ERROR, FETCH_RATES_START, FETCH_RATES_SUCCESS} from './actionTypes';
import axios from 'axios';

export function fetchRates() {
	return async dispatch => {
		dispatch(fetchRatesStart())
		try {
			const response = await axios.get('/data.json');
			const data = [...response.data];

			dispatch(fetchRatesSuccess(data))
		} catch (e) {
			dispatch(fetchRatesError(e))
		}
	}
}

export function fetchRatesStart() {
	return {
		type: FETCH_RATES_START
	}
}

export function fetchRatesSuccess(data) {
	return {
		type: FETCH_RATES_SUCCESS,
		data
	}
}

export function fetchRatesError(e) {
	return {
		type: FETCH_RATES_ERROR,
		error: e
	}
}