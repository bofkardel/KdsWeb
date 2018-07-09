import React from 'react'

class PageBottom extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const styles = {
            foot: {
                height: '50px',
                backgroundColor: '#E5E5E5',
                position: 'fixed',
                width: '100%',
                bottom: '0px',
            },
            footDevices: {
                fontSize: '18px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '50px',
                marginLeft: '37px',
                fontWeight: '300',
            },
            footIPAddress:{
                fontSize: '18px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '50px',
                marginLeft:'40px',
                fontWeight:'300',
            },
            footData:{
                fontSize: '18px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '50px',
                marginLeft:'40px',
                fontWeight:'300',
            },
            footHistory:{
                fontSize: '18px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '50px',
                fontWeight:'300',
                position:'fixed',
                right:'0px',
                height:'50px',
                marginRight:'37px'
            },
            footHisImg:{
                lineHeight: '50px',
                position:'fixed',
                right:'110px',
                height:'31px',
                width:'31px',
                bottom:'11px',
            },
            footNet:{
                fontSize: '18px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '50px',
                fontWeight:'300',
                position:'fixed',
                right:'245px',
                height:'50px',
                },
            footNetImg:{
                lineHeight: '50px',
                position:'fixed',
                right:'284px',
                height:'31px',
                width:'31px',
                bottom:'11px',
            },
            footUser:{
                fontSize: '18px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '50px',
                fontWeight:'300',
                position:'fixed',
                right:'420px',
                height:'50px',
            },
            footUserImg:{
                lineHeight: '50px',
                position:'fixed',
                right:'476px',
                height:'31px',
                width:'31px',
                bottom:'11px',
            },
        }
        return (
            <div style={styles.foot}>
                <span style={styles.footDevices}>设备名: 面档厨显设备01</span>
                <span style={styles.footIPAddress}>IP: 192.168.2.253</span>
                <span style={styles.footData}>2018-04-03 17:43</span>
                <span style={styles.footHistory}>历史订单</span>
                <img style={styles.footHisImg} src={require('../../../pic/history.png')}/>
                <span style={styles.footNet}>网络</span>
                <img style={styles.footNetImg} src={require('../../../pic/network.png')}/>
                <span style={styles.footUser}>颜亚洲</span>
                <img style={styles.footUserImg} src={require('../../../pic/user.png')}/>
            </div>
        )
    }
}

export default PageBottom