import React from 'react';
import style from './RateTable.module.css';
import {toYear} from '../../helpers/calculations';

const RateTable = ({data}) => {

	return (
		<table className={style.RateTable}>
			<tbody>
				<tr>
					<th>Размер ставки</th>
					<th>Валюта</th>
					<th>Сумма от, до</th>
					<th>Срок от, до</th>
				</tr>
				{ data ? data.map( (item, i) => (
					<tr key={i}>
						<td>{item.ratePerAnnum}</td>
						<td>{item.currency}</td>
						<td>{`${item.minLoan} - ${item.maxLoan}`}</td>
						<td>{`${toYear(item.minTerm)} - ${toYear(item.maxTerm)}`}</td>
					</tr>
				) ) : null }
			</tbody>
		</table>
	);
};

export default RateTable;
