import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import RateCalculator from './containers/RateCalculatorApp/RateCalculatorApp';
import RateReport from './containers/RateReport/RateReport';

class App extends Component {
  render() {
    return (
      <Layout>
				<Switch>
					<Route path="/rate-calculator" component={RateCalculator}/>
					<Route path="/rate-report" component={RateReport}/>
					<Route path="/" component={RateCalculator}/>
				</Switch>
		  </Layout>
    );
  }
}

export default App;
