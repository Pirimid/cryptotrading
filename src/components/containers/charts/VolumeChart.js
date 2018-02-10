import React from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
      chart: {
          type: 'bubble',
          plotBorderWidth: 1,
          height: (9 / 21 * 100) + '%'
      },
      legend: {
          enabled: false
      },
      credits: {
            enabled: false
      },

      title: {
          text: 'Volume by exchange (BTC)'
      },

      xAxis: {
          gridLineWidth: 1,
          labels: {
              format: '{value} K'
          },
          plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 25,
              zIndex: 3
          }]
      },

      yAxis: {
          startOnTick: false,
          endOnTick: false,
          labels: {
              format: '{value} K'
          },
          plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 25,
              zIndex: 3
          }]
      },

      tooltip: {
          useHTML: true,
          headerFormat: '<table>',
          pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
              '<tr><th>BTC Volume:</th><td>{point.z}</td></tr>',
          footerFormat: '</table>',
          followPointer: true
      },

      plotOptions: {

        bubble: {
            minSize: 3,
            maxSize: 100
        },
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },

      series: [{
          color : 'rgba(255, 255, 255, 0.7)',
          data: [
              { x: 5, y: 5, z: 18000, name: 'Krakan'},
              { x: 11, y: 11, z: 11000, name: 'Bitfinex'},
              { x: 8, y: 5, z: 8000, name: 'Binance'},
              { x: 21, y: 21, z: 21000, name: 'CEX.IO'},
              { x: 13, y: 13, z:13000, name: 'Bittrex'},
              { x: 8, y: 12, z: 7100, name: 'Poloniex'},
              { x: 9, y: 18, z: 9000, name: 'HitBTC'},
              { x: 18, y: 18, z: 22000, name: 'GDAX'},
          ]
      }]
};

export default class VolumeChart extends React.Component {
  render() {
    return (
        <div className="chart-bottom chart-container"  >
            <ReactHighcharts config={config} ref="chart" />
        </div>
    );
  }
}
