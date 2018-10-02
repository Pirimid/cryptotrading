import React from 'react';
import PriceChart from './PriceChart';
import VolumeChart from './VolumeChart';

export default class ChartsContainer extends React.Component {

    render() {
        return (
            <div className="card card-fh">
                <div className="card-fixed-header">
                    <h2 className="card-title"  >Charts</h2>
                </div>
                <div className="card-panel-body chart-container-card-body p-15">
                    <VolumeChart />
                    <PriceChart />
                </div>
            </div>
        );
    }
}
