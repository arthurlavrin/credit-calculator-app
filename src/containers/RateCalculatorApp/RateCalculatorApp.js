import React, {Component}  from 'react';
import InputRange from 'react-input-range';
import SimpleSelect from '../../components/SimpleSelect/SimpleSelect';
import RateTable from '../../components/RateTable/RateTable';
import Loader from '../../components/UI/Loader/Loader';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import {fetchRates} from '../../store/actions/rate';

import RateReview from '../../components/RateReview/RateReview';
import Button from '../../components/UI/Button/Button';

import styles from './RateCalculatorApp.module.css';
import 'react-input-range/lib/css/index.css'


class RateCalculator extends Component {
	state = {
		value: 0,
		currency: '',
		term: ''
	};

	componentDidMount() {
		this.props.fetchRates();
		const cachedRate = localStorage.getItem('myData');
		if (cachedRate) {
			this.setState({ ...JSON.parse(cachedRate) });
		}
	}

	handleChangeSelect = event => {
		this.setState({ [event.target.name]: event.target.value }, () => {
			localStorage.setItem('myData', JSON.stringify(this.state));
		} );
	};

	onChangeComplete = () => {
		localStorage.setItem('myData', JSON.stringify(this.state));
	}

	render() {
		return(
			<>
				<h1>CREDIT-CALC-APP</h1>
				<div>
					<div className={styles.RateCalculator}>
						<h1>Расчёт по кредиту</h1>
						<p>Сумма</p>
						<InputRange
							step={100}
							maxValue={10000}
							minValue={0}
							value={this.state.value}
							onChange={value => this.setState({ value })}
							onChangeComplete={this.onChangeComplete} />

						<div className={styles.selectWrapper}>
							<SimpleSelect typeOfSelect="currency" onSelect={this.handleChangeSelect} value={this.state.currency}/>
							<SimpleSelect typeOfSelect="term" onSelect={this.handleChangeSelect} value={this.state.term}/>
						</div>
					</div>
					<RateReview info={{...this.state, ...this.props}}/>
				</div>

			<Link to={{
				pathname:'/rate-report',
				state: {
					...this.state,
					data: this.props.data
				}
			}}
			>
				<Button type='primary'>Оформить</Button>
			</Link>

			{
				this.props.loading && this.props.data !== 0 ? <Loader /> : <RateTable data={this.props.data} />
			}

			</>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.rate.data,
		loading: state.rate.loading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchRates: () => dispatch(fetchRates())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RateCalculator);