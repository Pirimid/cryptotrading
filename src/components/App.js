/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import Header from './containers/Header';

import OrderForm from './containers/OrderForm';
import OrderBook from './containers/OrderBook';
import TradeHistory from './containers/TradeHistory';

import OrderTable from './containers/OrderTable';
import NewsSection from './containers/NewsSection';
import ChartsContainer from './containers/charts/ChartsContainer';

import {Grid, Row, Col } from 'react-bootstrap';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

	state = {
		activeCard: 'orderform',
	};

    handleCardClick = (event) => {
    	console.log('click');
        this.setState({ activeCard: event.target.getAttribute('data-card') });
    };

  render() {
	const activeStyle = { color: 'blue' };
	return (
	  <div>
		<Header />
		<div className="content">
			<div className={(this.state.activeCard == 'orderform' ? 'show' : '')}>
				<div className="col-16 col-1">
					<OrderForm />
				</div>
			</div>
			<div className={(this.state.activeCard == 'orderbook' ? 'show' : '')}>
				<div className="col-22 col-2">
					<OrderBook />
				</div>
			</div>
			<div className={(this.state.activeCard == 'orderbook' ? 'show' : '')}>
				<div className="col-40 col-3">
                    <ChartsContainer />
				</div>
			</div>
			<div className={(this.state.activeCard == 'tradehistory' ? 'show' : '')}>
				<div className="col-22 col-4">
					<TradeHistory />
				</div>
			</div>
		</div>
		<div className="clearfix"></div>
		<div className="order-news-section">
			<Row className="no-gutters">
				<Col md={8}>
					<OrderTable />
				</Col>
				<Col md={4}>
					<NewsSection />
				</Col>
			</Row>
		</div>
	  </div>
	);
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
