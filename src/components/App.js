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
			<Row className="no-gutters">
				<Col sm={2} md={2}>
					<OrderForm />
				</Col>
				<Col sm={3} md={3}>
					<OrderBook />
				</Col>
				<Col sm={5} md={5}>
					<div className="card">
						<h2 className="card-title">Price Chart</h2>
					</div>
				</Col>
				<Col sm={2} md={2}>
					<TradeHistory />
				</Col>
			</Row>
	  </div>
	);
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
