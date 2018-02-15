import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/tradeHistoryActions';

export class TradeHistory extends React.Component {

 constructor(props) {
        super(props);

        function onInterval(){
           this.props.actions.updateTradeHistory( this.props.tradeHistory[Math.floor(Math.random() * 4)]);
        }
        setInterval( onInterval.bind(this) , 100);
    }

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

                    {this.props.tradeHistory.active.map((object, i) => (
						<div key={i} className="card-panel-body-rows">
							<span >{object.tradeSize}</span>
							<span className={ ( object.up ? "up " : "down " ) + "arrow"}>{object.price}</span>
							<span>{object.time}</span>
							<span>{object.exchange}</span>
						</div>))}

				</div>
			</div>
		);
  }
}

function mapStateToProps(state) {
  return {
	currentPair: state.currentPair,
	tradeHistory: state.tradeHistory
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
