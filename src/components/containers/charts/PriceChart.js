import React from 'react';
import {Grid, Row, Col, DropdownButton, MenuItem, Button, FormGroup, FieldGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import {DATA_1D, DATA_6H} from '../../../constants/priceChartData';

let config = {
        navigator : {
            enabled : false
        },
        chart: {
            height: (9 / 21 * 100) + '%'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Price Chart'
        },
        scrollbar: {
            enabled : false
        },
        rangeSelector: {
            enabled : false,
        },
        plotOptions: {
            candlestick: {
                lineColor: '#ff6939',
                color: '#ff6939',
                upLineColor: '#4da53c',
                upColor: 'transparent'
            },
        },
        series: [{
            type: 'candlestick',
            data: DATA_1D,
        }]
    };

export default class PriceChart extends React.Component {
    state = {
        config : config
    }

  selectDateRange = (param) => {

    if( param === '1d' ) {
        config.series = [{
            type: 'candlestick',
            data: DATA_1D,
        }];
        this.setState( { config : config  } )
    } else if( param === '6h' ) {
        config.series = [{
            type: 'candlestick',
            data: DATA_6H,
        }];
        this.setState( { config : config  } )
    }

  }

  render() {
    return (
        <div className="padding-top-10 chart-container"  >
            <ReactHighstock config={this.state.config} ref="chart" />
        </div>
    );
  }
}
