import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/orderBookActions';

export class Header extends React.Component {

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
						<li><a href="#"><span>BTC/USD</span><span>$11926.0</span><span className="up">0.40%</span></a></li>
						<li><a href="#"><span>BTC/USD</span><span>$11926.0</span><span className="down">0.62%</span></a></li>
						<li><a href="#"><span>BTC/USD</span><span>$11926.0</span><span className="up">1.5%</span></a></li>
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
)(Header);
