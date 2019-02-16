import React from 'react';
import styles from './RateReview.module.css';
import calculations from '../../helpers/calculations';

const RateReview = (props) => {
	const { value, term, data, currency } = props.info;

	let totals = calculations(value, term, data, currency);

	return (
		<div className={styles.RateReview}>
			<div>
				<div>
					<p>Ставка по кредиту</p>
					<h2>{totals.currentRates.length !== 0 ? `${totals.bestRate}%` : 'не найдено'}</h2>
				</div>
				<div>
					<p>Ежемесячный платёж</p>
					<h2>{totals.currentRates.length !== 0 ? `${totals.monthSum ? totals.monthSum : ''} ${currency==='Гривны' ? 'грн.' : 'дол.'}` : 'не найдено'}</h2>
				</div>
			</div>
			<div>
				<p>Общая переплата</p>
				<h1>{totals.currentRates.length !== 0 ? `${totals.overpay ? totals.overpay : ''} ${currency==='Гривны' ? 'грн.' : 'дол.'}` : 'не найдено'}</h1>
			</div>
		</div>
	);
};

export default RateReview;
