import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import App from './App'
import AccessSystemPage from '../page/KDS/Access/access';
import history from './history';
import HistoryPage from "../page/KDS/History/history";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={HistoryPage} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root