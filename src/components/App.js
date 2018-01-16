/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './containers/Header';

import OrderForm from './containers/OrderForm';
import OrderBook from './containers/OrderBook';
import TradeHistory from './containers/TradeHistory';

import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import {Grid, Row, Col } from 'react-bootstrap';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
	const activeStyle = { color: 'blue' };
	return (
	  <div>
		<Header />
		<div className="content">
			<div className="col-16">
				<OrderForm />
			</div>
			<div className="col-22">
				<OrderBook />
			</div>
			<div className="col-40">
				<div className="card">
					<h2 className="card-title">Price Chart</h2>
				</div>
			</div>
			<div className="col-22">
				<TradeHistory />
			</div>
		</div>
	  </div>
	);
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
