import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/orderBookActions';
import * as orderFormActions from '../../actions/orderFormActions';

export class OrderBook extends React.Component {

  constructor(props) {
    super(props);

    function onInterval(){
     this.props.actions.updateOrderBook( this.props.orderBook[Math.floor(Math.random() * 4)]);
   }
   setInterval( onInterval.bind(this) , 500);
 }

 handleMarketSizeClick = (value) => {
  return (() => {
    let orderForm = {
      activeTab : 'market',
      isBuy : true,
      buyAmount : value.marketSize * value.price ,
      buySize : value.marketSize,
      exchange : value.exchange
    };
    this.props.orderFormActions.updateOrderForm( orderForm );
  }).bind(this);
};

handlePriceClick = (value) => {
  return (() => {
    let orderForm = {
      activeTab : 'limit',
      isBuy : false,
      limitPrice : value.price,
      buyAmount : 0,
      buySize : 0,
      exchange : value.exchange
    };
    this.props.orderFormActions.updateOrderForm( orderForm );
  }).bind(this);
};

handleSpreadMarketSizeClick = (value) => {
  return (() => {
    let orderForm = {
      activeTab : 'market',
      isBuy : false,
      buyAmount : value.marketSize * value.price,
      buySize : value.marketSize,
      exchange : value.exchange
    };
    this.props.orderFormActions.updateOrderForm( orderForm );
  }).bind(this);

  this.props.actions.updateOrderFormExchange( value );
};

handleSpreadPriceClick = (value) => {
  return (() => {
    let orderForm = {
      activeTab : 'limit',
      isBuy : true,
      limitPrice : value.price,
      buyAmount : 0,
      buySize : 0,
      exchange : value.exchange
    };
    this.props.orderFormActions.updateOrderForm( orderForm );
  }).bind(this);
};

render() {
  return (
    <div className="card card-fh">
    <div className="card-fixed-header">
    <h2 className="card-title" data-card="orderbook">Order Book</h2>
    <div className="card-panel-header col-w-3">
    <label>Market Size</label>
    <label>Price({ this.props.currentPair.unit2 })</label>
    <label>Exchange</label>
    </div>
    </div>
    <div className="card-panel-body col-w-3">

    {this.props.orderBook.active.map((object, i) => (
      <div key={i} className="card-panel-body-rows">
        <span className="buy-size" onClick={this.handleMarketSizeClick(object)} >{object.marketSize}</span>
        <span className="buy-price down" onClick={this.handlePriceClick(object)} >{object.price}</span>
        <span>{object.exchange}</span>
      </div>))}

    <div className="card-panel-body-rows lbl">
    <label>{ this.props.currentPair.unit2 } Spread</label>
    <label>0.47</label>
    </div>
    {this.props.orderBook.active.map((object, i) => (
      <div key={i} className="card-panel-body-rows">
        <span className="ask-size" onClick={this.handleSpreadMarketSizeClick(object)} >{object.marketSize}</span>
        <span className="ask-price up" onClick={this.handleSpreadPriceClick(object)} >{object.price}</span>
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
    orderBook: state.orderBook
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    orderFormActions: bindActionCreators(orderFormActions, dispatch)
 };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(OrderBook);
