import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'antd-mobile'
import CurrentUserBaseInfo from '../components/user-profile/CurrentUserBaseInfo'
import Login from '../components/user-profile/LoginPage'
import store from '../redux/create-store';
import {
    logout,
} from '../redux/user/userActions';

class HomePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleTemplateShow = this.handleTemplateShow.bind(this);
    this.handleTemplateClose = this.handleTemplateClose.bind(this);
    this.logout = this.logout.bind(this);
    
    this.state = {
      showTemplate: false
    };
  }

  handleTemplateClose() {
    this.setState({ showTemplate: false });
  }
  

  handleTemplateShow() {
    this.setState({ showTemplate: true });
  }

  logout() {
    store.dispatch(logout());
  }

  render() {
    return (
      <div>
        <Button className="button" onClick={this.handleTemplateShow}>显示个人信息</Button>
        <Button className="button" onClick={this.handleTemplateClose}>隐藏个人信息</Button>
        <Button className="button" onClick={this.logout}>退出</Button>
        
        {
            this.state.showTemplate && <CurrentUserBaseInfo />
        }
      </div>
    )
  }
}

const AboutPage = () => <Link to="/contact">About</Link>
const LoginPage = () => <Login />

class App extends Component {
  render() {
    return (
      <div className="base">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about" component={AboutPage} />
    </div>
    )
  }
}

export default App;
