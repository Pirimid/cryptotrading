import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/orderBookActions';

export class NewsSection extends React.Component {

	render() {
		return (
			<div>
				<div className="card-fixed-header">
					<h2 className="card-title ">News</h2>
				</div>
				<div className="btc-news">
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/cftc-sues-crypto-scheme-big-coin-fraud/" >
							CFTC Sues Obscure Crypto Scheme 'My Big Coin' for Fraud
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/makerdao-quest-stable-stablecoin-continues/" >
							MakerDAO and More: The Quest for a Stable Stablecoin Continues
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/building-a-base-bitcoin-demand-at-10k-hints-at-move-higher/" >
							Building a Base? Bitcoin Demand at $10K Hints at Move Higher
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/stripe-to-end-support-for-bitcoin-transactions/" >
							Payment Processor Stripe to End Support for Bitcoin
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/cftc-sues-crypto-scheme-big-coin-fraud/" >
							CFTC Sues Obscure Crypto Scheme 'My Big Coin' for Fraud
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/makerdao-quest-stable-stablecoin-continues/" >
							MakerDAO and More: The Quest for a Stable Stablecoin Continues
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/building-a-base-bitcoin-demand-at-10k-hints-at-move-higher/" >
							Building a Base? Bitcoin Demand at $10K Hints at Move Higher
						</a>
					</div>
					<div className="news-item card-news">
						<a target="_blank" href="https://www.coindesk.com/stripe-to-end-support-for-bitcoin-transactions/" >
							Payment Processor Stripe to End Support for Bitcoin
						</a>
					</div>
				</div>
			</div>
		);
	}
}

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
)(NewsSection);
