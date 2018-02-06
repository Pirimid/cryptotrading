import React from 'react';
import {Grid, Row, Col, DropdownButton, MenuItem, Button, FormGroup, FieldGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import {DATA_1D} from '../../../constants/priceChartData';

const config = {
        navigator : {
            enabled : false
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Price Chart'
        },
        scrollbar:{
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
            dataGrouping: {
units: [[
    'millisecond', // unit name
    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
], [
    'second',
    [1, 2, 5, 10, 15, 30]
], [
    'minute',
    [1, 2, 5, 10, 15, 30]
], [
    'hour',
    [1, 2, 3, 4, 6, 8, 12]
], [
    'day',
    [1]
], [
    'week',
    [1]
], [
    'month',
    [1, 3, 6]
], [
    'year',
    null
]]

            }
        }]
    };

export default class PriceChart extends React.Component {

  render() {
    return (
        <div className="padding-top-10"  >
            <ReactHighstock config={config} ref="chart" />
        </div>
    );
  }
}
