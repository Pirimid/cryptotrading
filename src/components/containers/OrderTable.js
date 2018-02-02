import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, Table } from 'react-bootstrap';
import '../../styles/NewTable.scss';
import * as actions from '../../actions/orderBookActions';

export class OrderTable extends React.Component {

  render() {
		return (
			<div>
                <div className="card-fixed-header">
    				<h2 className="card-title ">Orders</h2>
			    </div>
				<div className="clearfix"></div>
				<Table className="l-g-table">
					<thead>
						<tr>
							<th>Size</th>
							<th>Filled({this.props.currentPair.unit1})</th>
							<th>Price({this.props.currentPair.unit2})</th>
							<th>Time</th>
							<th>Status</th>
							<th>Side</th>
							<th>Exchange</th>
						</tr>
					</thead>
					<tbody>
					    { this.props.orderTable.length > 0 ?
                        (this.props.orderTable.map((object, i) => (
                            <tr key={i} >
                                <td >{object.size}</td>
                                <td >{object.filled}</td>
                                <td >{object.price}</td>
                                <td >{object.time}</td>
                                <td >{object.status}</td>
                                <td >{object.side}</td>
                                <td >{object.exchange}</td>
                            </tr>
                        ))) : <tr><td colSpan="7" className="padding-top-50 text-align-center">You have no orders</td></tr> }


					</tbody>
				</Table>
			</div>
		);
  }
}

OrderTable.propTypes = {
  actions: PropTypes.object.isRequired,
  currentPair: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
	currentPair: state.currentPair,
	orderTable: state.orderTable
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
)(OrderTable);
