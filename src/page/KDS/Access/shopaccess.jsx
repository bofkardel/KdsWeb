import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import { Row, Col } from 'antd';


class ShopAccessPage extends React.Component {
    constructor(props) {
        super(props)


        this.backtologin=this.backtologin.bind(this);
        this.clearinput=this.clearinput.bind(this);
        this.accesstouser=this.accesstouser.bind(this);
    }

    backtologin(){
        window.location.replace('/login')
    }

    clearinput(){

    }

    accesstouser(){
        window.location.replace('/useraccess')
    }


    render() {

        const styles = {
            loginBg: {
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundColor: '#4563ca'
            },
            loginCenterContent: {
                width: '68%',
                height: '68%',
                margin: 'auto',
                marginTop: '118px',
                display: 'flex',
                backgroundColor:'#fff',
                flexDirection: 'column',
                boxShadow: '#565656 0px 0px 12px 1px'
            },

            loginBottom:{
                height:'17%',
                display:'flex',
                flexDirection:'column',
                margin:'auto',
                width:'100%',
                paddingTop:'30px',
            },
            loginBottomText:{
                textAlign:'center',
                color:'#fff',
                fontWeight:'100',
                textShadow:'#000 3px 3px 4px',
            },
            shopaccessBack:{
                width:'40px',
                margin:'auto',
                marginLeft:'20px',
            },
            shopaccessTitle:{
                display:'flex',
                flexDirection:'row',
                marginTop:'18px',
                height:'10%',
            },
            shopaccessTitleText:{
                fontSize:'25px',
                width:'100%',
                textAlign:'center',
                color:'black',
                lineHeight:'56px',
            },
            shopaccessInputContent:{
                textAlign:'center',
                paddingTop:'20px',
                height:'23%'
            },
            shopaccessInput:{
                width:'45%',
                margin:'auto',
                border:'0px',
                outline:'none',
                placeholder:'#C1C1C1',
                fontSize:'18px',
                borderBottom:'1px #C1C1C1 solid',
                marginTop:'7px',
                padding:'5px',
            },
            shopaccessButtonContent:{
                height:'64%',
                marginLeft:'80px',
                marginRight:'80px',
                marginBottom:'50px',
                marginTop:'10px',
                display:'flex',
                flexDirection:'row'
            },
            shopaccessButtonContentLeft:{
                width:'80%',
            },
            shopaccessButtonContentRight:{
                width:'20%',
            },
            shopaccessButtonRow:{
                height:'33%',
            },
            shopaccessButtonCol:{
                padding:'10px',
                border:"2px #5678D2 solid",
                borderRadius:'5px',
                textAlign:'center',
                color:'#3E485A',
                fontSize:'28px',
                margin:'6px',
                height:'70%',
                lineHeight:'2',
            },
            shopaccessButtonClear:{
                border:"2px #5678D2 solid",
                borderRadius:'5px',
                textAlign:'center',
                color:'#3E485A',
                fontSize:'28px',
                margin:'6px',
                height:'40%',
                lineHeight:'4',
                marginTop:'12px',
            }
        }


        return (
            <div>
                <div><PageTitle/></div>

                <div style={styles.loginBg}>

                    <div style={styles.loginCenterContent}>
                        <div style={styles.shopaccessTitle}>
                            <img src={require('../../../pic/back.png')} style={styles.shopaccessBack} onClick={this.backtologin}/>
                            <div style={styles.shopaccessTitleText}>门店接入</div>
                        </div>
                        <form style={styles.shopaccessInputContent}>
                            <input
                                type="text"
                                placeholder="门店接入码"
                                style={styles.shopaccessInput}
                            />
                            <p>
                                <input
                                    type="text"
                                    placeholder="主机IP地址"
                                    style={styles.shopaccessInput}
                                />
                            </p>
                        </form>
                        <div style={styles.shopaccessButtonContent}>
                            <div style={styles.shopaccessButtonContentLeft}>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>7</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>8</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>9</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>.</Col>
                                </Row>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>4</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>5</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>6</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>0</Col>
                                </Row>
                                <Row style={styles.shopaccessButtonRow}>
                                    <Col span={5} style={styles.shopaccessButtonCol}>1</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>2</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>3</Col>
                                    <Col span={5} style={styles.shopaccessButtonCol}>←</Col>
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