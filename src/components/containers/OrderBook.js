import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import {getFormattedNumber} from '../../utils/formatNumbers';
import * as actions from '../../actions/fuelSavingsActions';

export class OrderBook extends React.Component {

    // constructor(props) {
    //     super(props);

    //     function onInterval(){
    //        this.props.actions.updateOrderBook(this.props.orderBook.reverse());
    //     }
    //     setInterval( onInterval.bind(this) , 3000);
    // }

  render() {
		return (
		  <div className="card card-fh">
				<div className="card-fixed-header">
					<h2 onClick="{this.handleCardClick}" className="card-title" data-card="orderbook">Order Book</h2>
					<div className="card-panel-header">
						<label>Market Size</label>
						<label>Price({ this.props.currentPair.unit2 })</label>
						<label>Exchange</label>
					</div>
				</div>
				<div className="card-panel-body m-t-fh">

					{this.props.orderBook.map((object, i) => (
						<div className="card-panel-body-rows">
							<span>{getFormattedNumber(object.marketSize)}</span>
							<span className="down">{object.price}</span>
							<span>{object.exchange}</span>
						</div>))}

					<div className="card-panel-body-rows lbl">
						<label>{ this.props.currentPair.unit2 } Spread</label>
						<label>0.47</label>
					</div>

					{this.props.orderBook.map((object, i) => (
						<div className="card-panel-body-rows">
							<span>{getFormattedNumber(object.marketSize)}</span>
							<span className="up">{object.price}</span>
							<span>{object.exchange}</span>
						</div>))}
				</div>
			</div>
		);
  }
}



// OrderBook.propTypes = {
//   actions: PropTypes.object.isRequired,
//   currentPair: PropTypes.object.isRequired,
//   orderBook: PropTypes.object.isRequired
// };



function mapStateToProps(state) {
  return {
	currentPair: state.currentPair,
	orderBook: state.orderBook
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
