import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/headerActions';

export class Header extends React.Component {

 changePair = (pair) => {
  return (() => {
    this.props.actions.updateCurrencyPair( pair );
  }).bind(this);
};

  render() {
	return (
	  <div className="nav" >
		  <div className="navItems navlogo-container"><span className="navlogo" >Crypto Trade</span></div>
		  <div className="navItems pair-selection-container p-r has-dropdown">
			  <div className="pair-selection">
				  <div className="pair nav-title">{this.props.currentPair.unit1}/{this.props.currentPair.unit2}</div>
				  <div className="selection nav-sm-title">Select product</div>
			  </div>
			  <i className="fa arrow fa-chevron-down" aria-hidden="true"></i>
			  <div className="nav-dropdown">
					<h5 className="nav-title">BITCOIN(BTC)</h5>
					<ul className="nav-dropdown-list">
                        {this.props.appData.availablePairs.pairCategory1.map((object, i) => (
    						<li key={i} onClick={this.changePair(object)} >
    						    <a >
    						        <span>{object.unit1} / {object.unit2}</span>
    						        <span>{object.symbolUnit2} {object.lastTradePrice}</span>
    						        <span className={ object.last24HourPrice > 0 ? "up" : "down"}>{object.last24HourPrice}%</span>
                                </a>
                            </li>
                        ))}
					</ul>
			  </div>
		  </div>
		  <div className="navItems">
			  <div className="pair-selection">
				  <div className="pair nav-title">{this.props.currentPair.lastTradePrice} {this.props.currentPair.unit1}</div>
				  <div className="selection nav-sm-title">Last trade price</div>
			  </div>
		  </div>
		  <div className="navItems">
			  <div className="pair-selection">
				  <div className="pair nav-title green">{this.props.currentPair.last24HourPrice} %</div>
				  <div className="selection nav-sm-title">24 hour price</div>
			  </div>
		  </div>
		  <div className="navItems">
			  <div className="pair-selection">
				  <div className="pair nav-title">{this.props.currentPair.last24HourVolume} {this.props.currentPair.unit2}</div>
				  <div className="selection nav-sm-title">24 hour volume</div>
			  </div>
		  </div>
	  </div>
	);
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  currentPair: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
	currentPair: state.currentPair,
	appData: state.appData
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
)(Header);
