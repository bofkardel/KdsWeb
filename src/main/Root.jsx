import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter as Router, Route } from 'react-router-dom'
import App from './App'
import AccessSystemPage from '../page/KDS/Access/access';
import history from './history';
import HistoryPage from "../page/KDS/History/history";
import LoginPage from "../page/KDS/Login/login";

const Root = ({ store }) => (
  <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/access" component={AccessSystemPage} />
                <Route path="/history" component={HistoryPage} />
                <Route path="/login" component={LoginPage}/>
            </div>
        </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root