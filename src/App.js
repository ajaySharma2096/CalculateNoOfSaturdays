import React from 'react';
import DatePicker from 'react-date-picker';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date1: '',
			date2: '',
			noOfSat: [],
		};
	}

	handleDateChange = (event, val) => {
		this.setState({
			[val]: event,
		});
	};

	handleClick = (date1, date2) => {
		const startDate = new Date(date1);
		if (date1 && date2) {
			var satDates = [];
			while (date1 <= date2) {
				if (date1.getDay() === 6) {
					satDates.push(date1.getDate());
				}
				date1.setDate(date1.getDate() + 1);
			}

			this.setState({
				date1: startDate,
				noOfSat: satDates,
			});
		} else {
			alert('Please select the start date and end date first');
		}
	};

	render() {
		const { date1, date2, noOfSat } = this.state;
		let SDates;
		if (noOfSat.length > 0) {
			SDates = noOfSat.map((item, index) => {
				return <span key={index}>{item} </span>;
			});
		}
		return (
			<div>
				<DatePicker onChange={(event) => this.handleDateChange(event, 'date1')} value={date1} />
				<DatePicker onChange={(event) => this.handleDateChange(event, 'date2')} value={date2} />
				<button onClick={() => this.handleClick(date1, date2)}>Find</button>
				<div>Number of saturday between these two dates are : {SDates}</div>
			</div>
		);
	}
}

export default App;
