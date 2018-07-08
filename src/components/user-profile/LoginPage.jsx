import React, {
    Component
} from 'react';
import {
    Button,
    List,
    InputItem
} from 'antd-mobile'
import {
    connect
} from 'react-redux'
import store from '../../redux/create-store';
import {
    login,
} from '../../redux/user/userActions';
import history from '../../main/history';

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this._onUsernameChange = this._onUsernameChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _onUsernameChange(value) {
        this.setState({
            username: value
        })
    }

    _onPasswordChange(value) {
        this.setState({
            password: value
        })
    }

    _handleClick() {
        store.dispatch(login(this.state.username, this.state.password));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginInfo) {
            history.push("/");
        }
    }

    render() {
        return (
            <div className="user-profile">
                <List renderHeader={() => '请输入用户名和密码'}>
                    <InputItem type="text" value={this.state.username} onChange={this._onUsernameChange}>用户名</InputItem>
                    <InputItem type="password" value={this.state.password} onChange={this._onPasswordChange}>密码</InputItem>
                    <List.Item>
                    <Button onClick={this._handleClick}>
                        login
                    </Button>
                  </List.Item>
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state /*, props*/ ) => {
    return {
        loginInfo: state.userReducer.loginInfo,
    }
};

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage);
export default ConnectedLoginPage