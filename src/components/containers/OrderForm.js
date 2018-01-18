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

    handleTabClick = (event) => {
        this.setState({ activeTab: event.target.getAttribute('data-tab') });
    };

  render() {
		return (
		  	<div className="card card-order-form">
				<h2 className="card-title" data-card="orderform" onClick={this.handleCardClick}>Order Form</h2>
				<div className="card-body">
					<div className="tabs">
						<ul className="tab-header-list">
							<li onClick={this.handleTabClick} data-tab='market' className={(this.state.activeTab == 'market' ? 'active' : '')} >Market</li>
							<li onClick={this.handleTabClick} data-tab='limit' className={(this.state.activeTab == 'limit' ? 'active' : '')} >Limit</li>
							<li onClick={this.handleTabClick} data-tab='stop' className={(this.state.activeTab == 'stop' ? 'active' : '')} >Stop</li>
						</ul>
						<div className="clearfix"></div><br />
						<div className="tab-content">
							<button className="btn primary hw">Buy</button>
							<button className="btn hw">Sell</button>
							<div className="clearfix"></div><br />
							<small className="lbl-sm">Amount</small>
							<div className="form-input-group">
								<input type="text" className="form-input" placeholder="0.00" />
								<span>{ this.props.currentPair.unit2 }</span>
							</div>
							<div className="clearfix"></div><br />
							<div className={(this.state.activeTab == 'limit' ? 'show' : 'hide')}>
								<small className="lbl-sm">Limit Price</small>
								<div className="form-input-group">
									<input type="text" className="form-input" placeholder="0.00" />
									<span>{ this.props.currentPair.unit1 }</span>
								</div>
								<div className="clearfix"></div><br />
								<small className="lbl-sm">Execution</small>
								<div className="clearfix"></div>
								<button className="btn hw fs">Post Only</button>
								<button className="btn info hw fs">Allow Taker</button>
							</div>
							<div className={(this.state.activeTab == 'stop' ? 'show' : 'hide')}>
								<small className="lbl-sm">Stop Price</small>
								<div className="form-input-group">
									<input type="text" className="form-input" placeholder="0.00" />
									<span>{ this.props.currentPair.unit1 }</span>
								</div>
								<div className="clearfix"></div><br />
							</div>
							<div className="sep-line"></div>
							<div className="clearfix">
								<div className="pull-left"><label className="lbl-sm">Total<small>({ this.props.currentPair.unit1 })</small>=</label></div>
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
