import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/fuelSavingsActions';

export class OrderForm extends React.Component {

    state = {
		activeTab: 'market',
	};

  handleTabClick = (event, param) => {
        this.setState({ activeTab: param });
  };

  render() {
		return (
		  <div className="card card-order-form">
				<h2 className="card-title">Order Form</h2>
				<div className="clearfix"></div>
				<div className="card-body">
					<div className="tabs">
						<ul className="tab-header-list">
							<li onClick={this.handleTabClick('market')} className={(this.state.activeTab == 'market' ? 'active' : '')} >Market</li>
							<li onClick={this.handleTabClick('limit')} className={(this.state.activeTab == 'limit' ? 'active' : '')} >Limit</li>
							<li onClick={this.handleTabClick('stop')} className={(this.state.activeTab == 'stop' ? 'active' : '')} >Stop</li>
						</ul>
						<div className="clearfix"></div><br />
						<div className="tab-content">
							<button className="btn primary hw">Buy</button>
							<button className="btn hw">Sell</button>
							<div className="clearfix"></div><br />
							<small className="lbl-sm">Amount</small>
							<div className="form-input-group">
								<input type="text" className="form-input" placeholder="0.00" />
								<span>EUR</span>
							</div>
							<div className="sep-line"></div>
							<div className="clearfix">
								<div className="pull-left"><label className="lbl-sm">Total<small>(BTC)</small>=</label></div>
								<div className="pull-right"><label className="lbl-sm">0.00000000</label></div>
							</div>
							<div className="clearfix"></div><br />
							<button className="btn block primary">Place Buy Order</button>
						</div>
						<br />
					</div>
				</div>
			</div>
		);
  }
}

OrderForm.propTypes = {
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
)(OrderForm);
