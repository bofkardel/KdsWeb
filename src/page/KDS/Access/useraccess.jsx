import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import {Row, Col} from 'antd';
import Background from '../../../pic/shopaccessbackground.png';


class UserAccessPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
        }
        //this.onPsAdd = this.onPsAdd.bind(this);
        this.onPsClear = this.onPsClear.bind(this);
        this.onPsMin = this.onPsMin.bind(this);
    }


    onPsAdd(num) {
        if (this.state.password.length < 7) {
            this.setState({
                password: this.state.password + num,
            });
        } else if (this.state.password.length === 7) {
            window.location.replace('/home')
        }

    }

    onPsClear() {
        this.setState({
            password: '',
        })
    }

    onPsMin() {
        if (this.state.password.length > 0) {
            this.setState({
                password: this.state.password.slice(0, this.state.password.length - 1)
            })
        }
    }

    render() {

        const styles = {
            loginBg: {
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                top: '36px',
                backgroundImage: `url(${Background})`
            },
            loginCenterContent: {
                width: '68%',
                height: '68%',
                margin: 'auto',
                marginTop: '118px',
                display: 'flex',
                flexDirection: 'column',
            },

            loginBottom: {
                height: '17%',
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                width: '100%',
                paddingTop: '30px',
            },
            loginBottomText: {
                textAlign: 'center',
                color: '#fff',
                fontWeight: '100',
                textShadow: '#000 3px 3px 4px',
            },

            shopaccessTitle: {
                display: 'flex',
                flexDirection: 'row',
                marginTop: '18px',
                height: '10%',
            },
            shopaccessTitleText: {
                fontSize: '25px',
                width: '100%',
                textAlign: 'center',
                color: 'black',
                lineHeight: '56px',
            },


            shopaccessButtonContent: {
                height: '52%',
                marginLeft: '100px',
                marginRight: '100px',
                marginBottom: '50px',
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row',

            },
            shopaccessButtonContentLeft: {
                width: '100%',
            },

            shopaccessButtonRow: {
                height: '33%',
            },
            shopaccessButtonCol: {
                padding: '10px',
                border: "2px #5678D2 solid",
                borderRadius: '5px',
                textAlign: 'center',
                color: '#3E485A',
                fontSize: '28px',
                margin: '6px',
                height: '77%',
                lineHeight: '1.8',
            },
            shopaccessButtonClear: {
                border: "2px #5678D2 solid",
                borderRadius: '5px',
                textAlign: 'center',
                color: '#3E485A',
                fontSize: '28px',
                margin: '6px',
                height: '40%',
                lineHeight: '4',
                marginTop: '12px',
            }
        }


        return (
            <div>
                <div><PageTitle/></div>

                <div style={styles.loginBg}>

                    <div style={styles.loginCenterContent}>

                        <div style={styles.shopaccessTitle}>
                            <div style={styles.shopaccessTitleText}>员工登录</div>
                        </div>
                        <PassWordContent password={this.state.password}/>


                        <div style={styles.shopaccessButtonContent}>
                            <div style={styles.shopaccessButtonContentLeft}>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('7')}>7</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('8')}>8</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('9')}>9</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <img src={require('../../../pic/clear.png')} style={{width: '33px'}}
                                             onClick={this.onPsClear}/>
                                    </Col>
                                </Row>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('4')}>4</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('5')}>5</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('6')}>6</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={this.onPsAdd.bind(this, '0')}>0</div>
                                    </Col>
                                </Row>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('1')}>1</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('2')}>2</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={() => this.onPsAdd('3')}>3</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div onClick={this.onPsMin}>←</div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </div>
                    <div style={styles.loginBottom}>
                        <span style={styles.loginBottomText}>彩虹云宝网络有限公司</span>
                        <span style={styles.loginBottomText}>当前版本：V5.51</span>
                        <span style={styles.loginBottomText}>联系客服：0755-83553245</span>

                    </div>
                </div>

            </div>
        )
    }
}


class PassWordContent extends React.Component {
    constructor(props) {
        super(props)


    }


    render() {

        const styles = {
            useraccessPasswordContent: {
                height: '15%',
                margin: 'auto',
                width: '100%'
            },
            useraccessPasswords: {
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                width: '68%',
            },
            useraccessPasswordHas: {
                backgroundColor: '#5678D2',
                width: '20px',
                height: '20px',
                margin: '20px',
                borderRadius: '50%'
            },
            useraccessPasswordNo: {
                backgroundColor: '#D8D8D8',
                width: '20px',
                height: '20px',
                margin: '20px',
                borderRadius: '50%',
            }
        }


        var passwordContent = [];

        for (let i = 0; i < this.props.password.length; i++) {
            passwordContent.push(<div style={styles.useraccessPasswordHas} key={i}/>)
        }
        for (let i = 0; i < 8 - this.props.password.length; i++) {
            passwordContent.push(<div style={styles.useraccessPasswordNo} key={this.props.password.length + i + 1}/>)
        }

        return (
            <div style={styles.useraccessPasswordContent}>
                <div style={styles.useraccessPasswords}>
                    {passwordContent}
                </div>
            </div>
        )
    }
}


export default UserAccessPage