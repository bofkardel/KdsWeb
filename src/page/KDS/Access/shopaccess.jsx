import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import {Row, Col, Modal} from 'antd';
import Background from '../../../pic/shopaccessbackground.png';
import UserApi from '../../../apis/UserApi';


class ShopAccessPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            accesscode: '',
            ipaddress: '',
            isInputAccesscode: true,
        }


        this.backtologin = this.backtologin.bind(this);
        this.clearinput = this.clearinput.bind(this);
        this.mininput = this.mininput.bind(this);
        this.accesstouser = this.accesstouser.bind(this);
        this.inputOnFocusShop = this.inputOnFocusShop.bind(this);
        this.inputOnFocus = this.inputOnFocus.bind(this);
        this.logout=this.logout.bind(this);

    }

    logout(){

    }

    backtologin() {
        window.location.replace('/')
    }

    clearinput() {
        this.setState({
            accesscode: '',
            ipaddress: '',
        })
    }

    mininput() {
        if (this.state.isInputAccesscode) {
            if (this.state.accesscode.length > 0) {
                this.setState({
                    accesscode: this.state.accesscode.slice(0, this.state.accesscode.length - 1)
                })
            }
        } else {
            if (this.state.ipaddress.length > 0) {
                this.setState({
                    ipaddress: this.state.ipaddress.slice(0, this.state.ipaddress.length - 1)
                })
            }
        }
    }


    onadd(num) {
        if (this.state.isInputAccesscode) {
            if (this.state.accesscode.length < 12) {
                this.setState({
                    accesscode: this.state.accesscode + num,
                });
            }
        } else {
            if (this.state.ipaddress.length < 20) {
                this.setState({
                    ipaddress: this.state.ipaddress + num,
                });
            }
        }
    }


    inputOnFocusShop() {
        this.setState({
            isInputAccesscode: true,
        });

    }

    inputOnFocus() {
        this.setState({
            isInputAccesscode: false,
        });
    }


    accesstouser() {
        // window.location.replace('/useraccess')
        UserApi.codeaccess(this.state.accesscode).then((res) => {

            localStorage.setItem("shopres", JSON.stringify(res))
            if (res.access_code) {
                UserApi.getshopdata(res.id, res.shop_id, res.version, 1)
                    .then((res) => {
                        localStorage.setItem("shopdata", JSON.stringify(res))
                        localStorage.setItem("kdses", JSON.stringify(res.kdses))
                        localStorage.setItem("currkds", JSON.stringify(res.kdses[0]))
                        localStorage.setItem("staffs",JSON.stringify(res.staffs))
                        window.location.replace('/useraccess')
                    })
            } else {
                Modal.info({
                    title:
                        '提示',
                    content:
                        (
                            <div>
                                <p>{res.message}</p>
                            </div>
                        ),
                    onOk() {
                    }
                    ,
                })
            }

        })


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
                userSelect: 'none',
            },
            shopaccessBack: {
                width: '40px',
                margin: 'auto',
                marginLeft: '20px',
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
                userSelect: 'none',
            },
            shopaccessInputContent: {
                textAlign: 'center',
                paddingTop: '20px',
                height: '23%'
            },
            shopaccessInput: {
                width: '45%',
                margin: 'auto',
                border: '0px',
                outline: 'none',
                placeholder: '#C1C1C1',
                fontSize: '18px',
                borderBottom: '1px #C1C1C1 solid',
                marginTop: '7px',
                padding: '5px',
            },
            shopaccessButtonContent: {
                height: '64%',
                marginLeft: '80px',
                marginRight: '80px',
                marginBottom: '50px',
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row'
            },
            shopaccessButtonContentLeft: {
                width: '80%',
            },
            shopaccessButtonContentRight: {
                width: '20%',
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
                height: '70%',
                lineHeight: '2',
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
                userSelect: 'none',
            }
        }


        return (
            <div>
                <div><PageTitle  logout={this.logout}/></div>

                <div style={styles.loginBg}>

                    <div style={styles.loginCenterContent}>
                        <div style={styles.shopaccessTitle}>
                            <img src={require('../../../pic/back.png')} style={styles.shopaccessBack}
                                 onClick={this.backtologin}/>
                            <div style={styles.shopaccessTitleText}>门店接入</div>
                        </div>
                        <form style={styles.shopaccessInputContent}>
                            <input
                                type="text"
                                placeholder="门店接入码"
                                value={this.state.accesscode}
                                style={styles.shopaccessInput}
                                onFocus={this.inputOnFocusShop}
                            />
                            <p>
                                <input
                                    type="text"
                                    placeholder="主机IP地址"
                                    value={this.state.ipaddress}
                                    style={styles.shopaccessInput}
                                    onFocus={this.inputOnFocus}
                                />
                            </p>
                        </form>
                        <div style={styles.shopaccessButtonContent}>
                            <div style={styles.shopaccessButtonContentLeft}>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('7')}>7</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('8')}>8</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('9')}>9</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('.')}>.</div>
                                    </Col>
                                </Row>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('4')}>4</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('5')}>5</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('6')}>6</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('0')}>0</div>
                                    </Col>
                                </Row>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('1')}>1</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('2')}>2</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={() => this.onadd('3')}>3</div>
                                    </Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>
                                        <div style={{userSelect: 'none'}} onClick={this.mininput}>←</div>
                                    </Col>
                                </Row>
                            </div>
                            <div style={styles.shopaccessButtonContentRight}>
                                <div style={styles.shopaccessButtonClear} onClick={this.clearinput}>清空</div>
                                <div style={styles.shopaccessButtonClear} onClick={this.accesstouser}>接入</div>
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


export default ShopAccessPage