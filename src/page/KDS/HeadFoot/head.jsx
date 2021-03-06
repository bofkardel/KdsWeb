import React from 'react'

class HistoryPageTitle extends React.Component {
    constructor(props) {
        super(props)


        this.choiceStall=this.choiceStall.bind(this);
        this.logout=this.logout.bind(this)
    }


    choiceStall(){
        this.props.choiceStall();
    }

    logout(){
        this.props.logout();
    }

    render() {
        const styles = {
            title: {
                height: '36px',
                lineHeight: '33px',
                background: '#383F4F',
                position: 'fixed',
                paddingBottom:'3px',
                width: '100%',
                left: '0',
                top: '0',
            },


            titleText1: {
                marginLeft: '37px',
                textAlign: 'center',
                fontSize: '20px',
                color: '#ffffff',
                height: '33px',
                fontWeight:'100',
                letterSpacing:'-0.72px',
                userSelect:'none',
            },

            titleText2: {
                marginLeft: '18px',
                textAlign: 'center',
                fontSize: '11px',
                color: '#ffffff',
                fontWeight:'100',
                userSelect:'none',
            },
            titleText3: {
                height: '33px',
                fontSize: '20px',
                letterSpacing:'-0.72px',
                color: '#ffffff',
                position:'absolute',
                fontWeight: '100',
                left:'40%',
                userSelect:'none',
            },
            titleText4: {
                float: 'right',
                marginRight: '20px',
                height: '33px',
                fontWeight: '100',
                fontSize: '20px',
                letterSpacing:'-0.72px',
                color: '#ffffff',
                textAlign: 'center',
                userSelect:'none',
            },
            titleText5: {
                float: 'right',
                marginRight: '20px',
                height: '33px',
                fontWeight: '900',
                fontSize: '18px',
                color: '#ffffff',
                textAlign: 'center',
                display: 'none',
                userSelect:'none',
            },
            titleImg: {
                float: 'right',
                marginRight: '10px',
                lineHeight: '33px',
                marginTop: '5px',
                width:'23px',
                height:'23px',
                userSelect:'none',
            }
        }


        return (
            <div style={styles.title}>
                <span style={styles.titleText1}>食通宝</span>
                <span style={styles.titleText2}>餐饮软件管理系统</span>
                <span style={styles.titleText3} onClick={this.choiceStall}>{(this.props.stallname)?'KDS：'+this.props.stallname:""}</span>
                <span style={styles.titleText4} onClick={this.logout}>注销</span>
                <img style={styles.titleImg} src={require('../../../pic/logout.png')}/>
                <span style={styles.titleText5}>__</span>
            </div>
        )
    }
}



export default HistoryPageTitle