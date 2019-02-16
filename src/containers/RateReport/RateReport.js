import React from 'react';
import styles from './RateReport.module.css';
import calculations, {toYear} from '../../helpers/calculations';

const RateReport = (props) => {
	const { value, term, data, currency } = props.location.state;
	let totals = calculations(value, term, data, currency);
	let {bestRate, period, totalSum, monthSum, overpay} = totals;
	let currentCurrency = currency === 'Гривны' ? 'грн.' : 'дол.';

	return (
		<div className={styles.RateReport}>
			<p>Вы оформляете кредит на сумму <b>{value} {currentCurrency}</b> сроком на <b>{toYear(period)}</b> по ставке - <b>{bestRate}%</b> годовых.</p>
			<p>Платеж в месяц - <b>{monthSum} {currentCurrency}</b> Переплата - <b>{overpay} {currentCurrency}</b></p>
			<p>Итоговая сумма - <b>{totalSum.toFixed(0)} {currentCurrency}</b></p>
		</div>
	);
};

export default RateReport;
