import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import '../../styles/NewsBox.scss';
import * as actions from '../../actions/orderBookActions';

export class OrderTable extends React.Component {

  render() {
		return (
			<div>
				<h2 className="card-title">News BTC</h2>
				<div className="clearfix"></div>
				<div className="btc-news">
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<Image src="https://i.pinimg.com/236x/30/50/80/3050803135277ac1e153cc6aaeef796a--tech-news-first-time.jpg" className="news-thumbnail" responsive />
							</Col>
							<Col md={10}>
								<p className="p-text">
									How To Save on Bitcoin's Soaring Fees.
								</p>
							</Col>
						</Row>
					</div>
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<Image src="http://wire.kapitall.com/wp-content/image-import/ThinkstockPhotos-522646895-200x150.jpg" className="news-thumbnail" responsive />
							</Col>
							<Col md={10}>
								<p className="p-text">
									Bitcoin broker Coinbase booked $1 billion in revenue last year — so the company has told hovering VCs to back off
								</p>
							</Col>
						</Row>
					</div>
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<Image src="https://images.jagran.com/naidunia/bitcoin_plunge_2018118_154733_18_01_2018_m.jpg" className="news-thumbnail" responsive />
							</Col>
							<Col md={10}>
								<p className="p-text">
									Japan bitcoin bourse group stages Europe expansions
								</p>
							</Col>
						</Row>
					</div>
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<Image src="http://img.timesnownews.com/story/1514462803-bitcoin_new.jpg?d=200x150" className="news-thumbnail" responsive />
							</Col>
							<Col md={10}>
								<p className="p-text">
									Bitcoin To Drop As Low As $1000 This Year, Wall Street CIO Predicts
								</p>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
  }
}

OrderTable.propTypes = {
  actions: PropTypes.object.isRequired,
  currentPair: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
	currentPair: state.currentPair
  };
}

function mapDispatchToProps(dispatch) {
  return {
	actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderTable);
