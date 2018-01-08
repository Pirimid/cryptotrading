import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/fuelSavingsActions';

export class OrderBook extends React.Component {

  render() {
		return (
		  <div className="card card-fh">
			<div className="card-fixed-header">
					<h2 className="card-title">Order Book</h2>
					<div className="card-panel-header">
						<label>Market Size</label>
						<label>Price(EUR)</label>
						<label>My Size</label>
					</div>
				</div>
				<div className="card-panel-body m-t-fh">
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>

					<div className="card-panel-body-rows lbl">
						<label>Eur Spread</label>
						<label>0.47</label>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>3.123356</span><span>2.90909087</span>
					</div>
				</div>
			</div>
		);
  }
}

OrderBook.propTypes = {
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
)(OrderBook);
