import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import './login.less'
import Background from '../../../pic/loginbackground.png';


class LoginPage extends React.Component {
    constructor(props) {
        super(props)


        this.toKDS = this.toKDS.bind(this);
        this.logout=this.logout.bind(this);
    }

    logout(){

    }

    toKDS() {
        window.location.replace('/shopaccess')
    }


    render() {

        const styles = {
            loginBg: {
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
                top:'36px',
                backgroundImage: `url(${Background})`
            },
            loginCenterContent: {
                width: '68%',
                height: '68%',
                margin: 'auto',
                marginTop: '118px',
                display: 'flex',
                flexDirection: 'row',
            },
            loginCenterLeft: {
                height: '100%',
                width: '40%',
            },
            loginCenterRight: {
                height: '100%',
                width: '60%',
                display: 'flex',
                flexDirection: 'column'
            },
            loginCenterWelcome: {
                color: '#ffffff',
                fontSize: '33px',
                marginLeft: '56px',
                fontWeight: '100',
                position: 'relative',
                top: '50px',
                userSelect: 'none',
            },
            loginCenterName1: {
                color: '#ffffff',
                fontSize: '60px',
                marginLeft: '56px',
                position: 'relative',
                top: '60px',
                fontWeight: '300',
                userSelect: 'none',
            },
            loginCenterName2: {
                color: '#ffffff',
                fontSize: '32px',
                fontWeight: '200',
                marginLeft: '6px',
                position: 'relative',
                top: '60px',
                userSelect: 'none',
            },
            loginCenterChoiceTitle: {
                color: '#3E485A',
                fontSize: '32px',
                fontWeight: '400',
                marginLeft: '52px',
                position: 'relative',
                top: '65px',
                userSelect: 'none',
            },
            loginCenterChoicePos: {
                color: '#3E485A',
                borderRadius: '30px',
                border: '1px #5678D2 solid',
                textAlign: 'center',
                width: '300px',
                backgroundColor: '#ffffff',
                margin: 'auto',
                height: '60px',
                lineHeight: '60px',
                fontSize: '22px',
                marginBottom: '40px',
                boxShadow: '#5678D2 0px 0px 6px 1px',
            },
            loginCenterSystems: {
                margin: 'auto',
                top: '70px',
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
                userSelect:'none',
            }
        }


        return (
            <div>
                <div><PageTitle logout={this.logout}/></div>

                <div style={styles.loginBg}>

                    <div style={styles.loginCenterContent}>
                        <div style={styles.loginCenterLeft}>
                            <div style={styles.loginCenterWelcome}>欢迎进入</div>
                            <div><span style={styles.loginCenterName1}>食</span>
                                <span style={styles.loginCenterName2}>通宝</span>
                            </div>
                        </div>
                        <div style={styles.loginCenterRight}>
                            <div style={styles.loginCenterChoiceTitle}>选择使用系统:</div>
                            <div style={styles.loginCenterSystems}>
                                <span style={styles.loginCenterChoicePos} onClick={this.toPos}>收银系统</span>
                                <span style={styles.loginCenterChoicePos} onClick={this.toQuickPos}>收银系统(快餐)</span>
                                <span style={styles.loginCenterChoicePos} onClick={this.toKDS}>KDS厨显系统</span>
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


export default LoginPage