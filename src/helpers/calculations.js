
export default (value, term, data, currency) => {

	let currentRates = [];

	for (let i = 0; i < data.length; i++) {
		if ( value <= data[i].maxLoan
			&& value >= data[i].minLoan
			&& term <= data[i].maxTerm
			&& value >= data[i].minTerm
			&& currency === data[i].currency) {

			currentRates.push(data[i].ratePerAnnum)

		}
	}

	let bestRate = Math.min(...currentRates);
	let period = term;
	let coef = (bestRate/100/12);

	let totalSum = value*coef*Math.pow((1+coef), period)/(Math.pow((1+coef), period)-1)*period;
	let monthSum = Math.floor(totalSum/period);
	let overpay = Math.floor(totalSum-value);

	return {bestRate, period, totalSum, monthSum, overpay, currentRates}
}

export const toYear = (date) => {
	return date > 11 ? `${(date/12).toFixed(0)} лет` : `${date} мес.`
}