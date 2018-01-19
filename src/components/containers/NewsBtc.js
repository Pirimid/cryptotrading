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
				<h2 className="card-title dark-bg">News BTC</h2>
				<div className="clearfix"></div>
				<div className="btc-news">
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<i className="mdi mdi-image"></i>
							</Col>
							<Col md={10}>
								<p className="p-text">
									Lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl 
								</p>
							</Col>
						</Row>
					</div>
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<i className="mdi mdi-image"></i>
							</Col>
							<Col md={10}>
								<p className="p-text">
									Lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl 
								</p>
							</Col>
						</Row>
					</div>
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<i className="mdi mdi-image"></i>
							</Col>
							<Col md={10}>
								<p className="p-text">
									Lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl 
								</p>
							</Col>
						</Row>
					</div>
					<div className="card-news">
						<Row className="no-gutters">
							<Col md={2} className="text-center">
								<i className="mdi mdi-image"></i>
							</Col>
							<Col md={10}>
								<p className="p-text">
									Lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl lorem iprm adckjaskl cjs kcdsl 
								</p>
							</Col>
						</Row>
					</div>
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
