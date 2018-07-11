import React from 'react'

class HistoryPageTitle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            title: {
                height: '73px',
                lineHeight: '73px',
                background: '#383F4F',
                position: 'fixed',
                width: '100%',
                left: '0',
                top: '0',
            },


            titleText1: {
                marginLeft: '37px',
                textAlign: 'center',
                fontSize: '30px',
                color: '#ffffff',
                height: '73px',
                fontWeight:'100',
                letterSpacing:'-0.72px'
            },

            titleText2: {
                marginLeft: '25px',
                textAlign: 'center',
                fontSize: '18px',
                color: '#ffffff',
                fontWeight:'100',
            },
            titleText3: {
                height: '73px',
                fontSize: '30px',
                letterSpacing:'-0.72px',
                color: '#ffffff',
                position:'absolute',
                fontWeight: '100',
                left:'45%',
            },
            titleText4: {
                float: 'right',
                marginRight: '20px',
                height: '73px',
                fontWeight: '100',
                fontSize: '30px',
                letterSpacing:'-0.72px',
                color: '#ffffff',
                textAlign: 'center',
            },
            titleText5: {
                float: 'right',
                marginRight: '20px',
                height: '73px',
                fontWeight: '900',
                fontSize: '20px',
                color: '#ffffff',
                textAlign: 'center',
                display: 'none',
            },
            titleImg: {
                float: 'right',
                marginRight: '10px',
                lineHeight: '73px',
                marginTop: '12px',
            }
        }


        return (
            <div style={styles.title}>
                <span style={styles.titleText1}>食通宝</span>
                <span style={styles.titleText2}>餐饮软件管理系统</span>
                <span style={styles.titleText3}>KDS: 面档口(M01)</span>
                <span style={styles.titleText4}>注销</span>
                <img style={styles.titleImg} src={require('../../../pic/logout.png')}/>
                <span style={styles.titleText5}>__</span>
            </div>
        )
    }
}



export default HistoryPageTitle