import React, {
    Component
} from 'react';
import {
    Modal,
} from 'antd-mobile'
import Immutable from 'immutable';
import {
    connect
} from 'react-redux'
import store from '../../redux/create-store';
import {
    fetchCurrentUserInfo
} from '../../redux/user/userActions';

class CurrentUserBaseInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: Immutable.Map({
                currentUser: this.props.currentUser ? this.props.currentUser : null
            }),
            modal: true
        }
        this.onClose = this.onClose.bind(this);
    }

    componentWillMount() {
        if (!this.props.currentUser) {
            store.dispatch(fetchCurrentUserInfo());
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser) {
            this.setState({
                data: this.state.data.set('currentUser', nextProps.currentUser)
            })
        }
    }


    onClose(){
        this.setState({
            modal: false,
        });
    }

    render() {
        return (
            <div className="user-profile">
                <div>{this.state.data.get("currentUser")?this.state.data.get("currentUser").name:''}</div>
                <Modal
                  visible={this.state.modal}
                  transparent
                  maskClosable={false}
                  onClose={this.onClose}
                  title="Title"
                  footer={[{ text: 'Ok', onPress: () => { this.onClose(); } }]}
                >
                      <div>{this.state.data.get("currentUser")?this.state.data.get("currentUser").name:''}</div>
                </Modal>
                
            </div>
        )
    }
}

const mapStateToProps = (state /*, props*/ ) => {
    return {
        currentUser: state.userReducer.currentUser,
    }
};

const ConnectedCurrentUserBaseInfo = connect(mapStateToProps)(CurrentUserBaseInfo);
export default ConnectedCurrentUserBaseInfo