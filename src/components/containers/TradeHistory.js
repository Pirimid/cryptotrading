import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/fuelSavingsActions';

export class TradeHistory extends React.Component {

  render() {
		return (
		  <div className="card card-fh">
		  	<div className="card-fixed-header cw2">
					<h2 className="card-title">Trade History</h2>
					<div className="card-panel-header">
						<label>Total Size</label>
						<label>Price(EUR)</label>
						<label>Time</label>
					</div>
				</div>
				<div className="card-panel-body m-t-fh">
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up">9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down">9830.17</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span>
					</div>
				</div>
			</div>
		);
  }
}

TradeHistory.propTypes = {
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
)(TradeHistory);
