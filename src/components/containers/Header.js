import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/fuelSavingsActions';

export class Header extends React.Component {

  render() {
    return (
      <div className="nav" >
          <div className="navItems navlogo-container"><span className="navlogo" >Crypto Trade</span></div>
          <div className="navItems pair-selection-container">
              <div className="pair-selection">
                  <div className="pair">{this.props.currentPair.unit1}/{this.props.currentPair.unit2}</div>
                  <div className="selection">Select product</div>
              </div>
              <i className="fa fa-2 arrow fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="navItems">
              <div className="pair-selection">
                  <div className="pair">{this.props.currentPair.lastTradePrice} {this.props.currentPair.unit1}</div>
                  <div className="selection">Last trade price</div>
              </div>
          </div>
          <div className="navItems">
              <div className="pair-selection">
                  <div className="pair">{this.props.currentPair.last24HourPrice} %</div>
                  <div className="selection">24 hour price</div>
              </div>
          </div>
          <div className="navItems">
              <div className="pair-selection">
                  <div className="pair">{this.props.currentPair.last24HourVolume} {this.props.currentPair.unit2}</div>
                  <div className="selection">24 hour volume</div>
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
