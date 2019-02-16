import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		marginRight: '10px',
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
});

const currencyTypes = ['Гривны', 'Доллары'];
const terms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 24, 36, 48, 60, 72];
const typeMap = {
	currency: 'Валюта',
	term: 'Срок'
};

const SimpleSelect = ( { classes, typeOfSelect, onSelect, value } ) =>  (

	<form className={classes.root} autoComplete="off">
		<FormControl className={classes.formControl}>
			<InputLabel shrink htmlFor={`${typeOfSelect}-label-placeholder`}>
				{typeMap[typeOfSelect]}
			</InputLabel>
			<Select
				value={value}
				onChange={onSelect}
				input={<Input name={typeOfSelect} id={`${typeOfSelect}-label-placeholder`} />}
				name={typeOfSelect}
				className={classes.selectEmpty}
			>

				{ typeOfSelect === 'currency' ? currencyTypes.map( (item, i) => (
					<MenuItem value={item} key={i}>{item}</MenuItem>
				) ) : null }

				{ typeOfSelect === 'term' ? terms.map( (item, i) => (
					<MenuItem value={item} key={i}>{`${item} мес.`}</MenuItem>
				) ) : null }

			</Select>
		</FormControl>
	</form>

);

export default withStyles(styles)(SimpleSelect);