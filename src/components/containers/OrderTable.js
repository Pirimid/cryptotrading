import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import * as actions from '../../actions/orderBookActions';

import { AgGridReact } from 'ag-grid-react';
import '../../styles/agGridTheme.scss';


export class OrderTable extends React.Component {

	render() {

		const gridData = {
			columnDefs: [
				{ headerName: "Size", field: "size", checkboxSelection: true },
				{ headerName: `Filed(${this.props.currentPair.unit1})`, field: "filled" },
				{ headerName: `Price(${this.props.currentPair.unit2})`, field: "price" },
				{ headerName: "Time", field: "time" },
				{ headerName: "Status", field: "status" },
				{ headerName: "Side", field: "side" },
				{ headerName: "Exchange", field: "exchange" }

			],
			rowData: this.props.orderTable.map(({ size, filled, price, time, status, side, exchange } = order) => (
				{ size, filled, price, time, status, side, exchange }
			))
		};

		return (
			<div>
				<div className="card-fixed-header">
					<h2 className="card-title ">Orders</h2>
				</div>
				<div className="clearfix"></div>
				<div className="l-g-table">
					{this.props.orderTable.length > 0 ?
						(<div
							className="ag-theme-balham-dark"
							style={{ width: "100%", height: "500px" }}
						>
							<AgGridReact
								columnDefs={gridData.columnDefs}
								rowData={gridData.rowData}
								enableSorting={true}
								enableFilter={true}
								rowSelection="multiple"
							>
							</AgGridReact>
						</div>) : <span style={{ color: "rgba(255, 255, 255, 0.7)" }} >You have no orders</span>}
				</div>
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
