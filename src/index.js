/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.
import HighchartsMore from 'highcharts-more';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import {CHART_THEME} from './constants/chartTheme'

HighchartsMore(ReactHighcharts.Highcharts);
ReactHighcharts.Highcharts.setOptions(CHART_THEME);
ReactHighstock.Highcharts.setOptions(CHART_THEME);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
