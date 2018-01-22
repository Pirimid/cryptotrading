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
				<h2 className="card-title">Order Book</h2>
				<div className="clearfix"></div>
				<Table table className="l-g-table">
					<thead>
						<tr>
							<th>Size</th>
							<th>Filled</th>
							<th>Price</th>
							<th>Time</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>10</td>
							<td>filled</td>
							<td>120</td>
							<td>12:00</td>
							<td>pending</td>
						</tr>
						<tr>
							<td>10</td>
							<td>filled</td>
							<td>120</td>
							<td>12:00</td>
							<td>pending</td>
						</tr>
						<tr>
							<td>10</td>
							<td>filled</td>
							<td>120</td>
							<td>12:00</td>
							<td>pending</td>
						</tr>
						<tr>
							<td>10</td>
							<td>filled</td>
							<td>120</td>
							<td>12:00</td>
							<td>pending</td>
						</tr>
						<tr>
							<td>10</td>
							<td>filled</td>
							<td>120</td>
							<td>12:00</td>
							<td>pending</td>
						</tr>
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
)(OrderTable);
