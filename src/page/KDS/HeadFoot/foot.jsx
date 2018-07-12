import React from 'react'

class PageBottom extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const styles = {
            foot: {
                height: '30px',
                backgroundColor: '#E5E5E5',
                position: 'fixed',
                width: '100%',
                bottom: '0px',
            },
            footDevices: {
                fontSize: '12px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '30px',
                marginLeft: '27px',
                fontWeight: '300',
            },
            footIPAddress:{
                fontSize: '12px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '30px',
                marginLeft:'30px',
                fontWeight:'300',
            },
            footData:{
                fontSize: '12px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '30px',
                marginLeft:'30px',
                fontWeight:'300',
            },
            footHistory:{
                fontSize: '13px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '30px',
                fontWeight:'300',
                position:'fixed',
                right:'0px',
                height:'30px',
                marginRight:'27px'
            },
            footHisImg:{
                lineHeight: '30px',
                position:'fixed',
                right:'80px',
                height:'16px',
                width:'16px',
                bottom:'7px',
            },
            footNet:{
                fontSize: '13px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '30px',
                fontWeight:'300',
                position:'fixed',
                right:'245px',
                height:'30px',
                },
            footNetImg:{
                lineHeight: '30px',
                position:'fixed',
                right:'274px',
                height:'16px',
                width:'16px',
                bottom:'7px',
            },
            footUser:{
                fontSize: '12px',
                color: '#333333',
                letterSpacing: '-0.43px',
                textAlign: 'center',
                lineHeight: '30px',
                fontWeight:'300',
                position:'fixed',
                right:'420px',
                height:'30px',
            },
            footUserImg:{
                lineHeight: '30px',
                position:'fixed',
                right:'458px',
                height:'16px',
                width:'16px',
                bottom:'7px',
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