import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/orderBookActions';

export class TradeHistory extends React.Component {

  render() {
		return (
		  <div className="card card-fh">
		  	<div className="card-fixed-header">
					<h2 className="card-title" data-card="tradehistory" onClick={this.handleCardClick}>Trade History</h2>
					<div className="card-panel-header col-w-4">
						<label>Total Size</label>
						<label>Price({ this.props.currentPair.unit2 })</label>
						<label>Time</label>
						<label>Exchange</label>
					</div>
				</div>
				<div className="card-panel-body col-w-4">
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span className="up arrow">9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span className="down arrow">9830.17</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>

					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div><div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
					<div className="card-panel-body-rows">
						<span>0.01879837</span><span>9830.50</span><span>12:13:37</span><span>exachange</span>
					</div>
				</div>
			</div>
		);
  }
}

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
