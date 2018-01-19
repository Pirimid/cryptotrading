import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col } from 'react-bootstrap';
import * as actions from '../../actions/fuelSavingsActions';

export class OrderTable extends React.Component {

  render() {
		return (
			<div>
				<h2 className="card-title dark-bg">Order Book</h2>
				<div className="clearfix"></div>
				<table className="table l-g-table">
					<thead>
						<tr>
							<th>Size</th>
							<th>Filled(BTC)</th>
							<th>Price</th>
							<th>Time</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>sd</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>sd</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Larry the Bird</td>
							<td>@twitter</td>
							<td>@twitter</td>
							<td>sd</td>
						</tr>
					</tbody>
				</table>
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
