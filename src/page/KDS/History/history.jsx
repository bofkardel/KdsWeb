import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'


class HistoryPage extends React.Component {


    render() {

        const styles = {}

        return (
            <div>
                <div><PageTitle/></div>
                <div><HistoryPageContent/></div>
                <div><PageBottom/></div>
            </div>
        )
    }
}


class HistoryPageContent extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const styles = {
            content: {
                backgroundColor: '#FBFBFB',
                top: '74px',
                bottom: '50px',
                position:'fixed',
                width:'100%'
            },
            titleText:{
                color:'#333333',
                fontSize:'30px',
                letterSpacing:'-0.72px',
                paddingTop:'9px',
                width:'100%',
                textAlign:'center',
                position:'fixed',
                height:'67px'
            },
            contentList:{
                width:'100%',
                height:'100%',
                backgroundColor:'blue',
                marginTop:'67px',
                paddingBottom:'127px',
                boxSizing:'border-box',
            },
            buttonLayout:{
                width:'724',
                position:'fixed',
                backgroundColor:'green',
                bottom:'50px',
                width:'100%',
                height:'128px',
                textAlign:'center'
            },
            buttonStyle:{
                fontSize:'30px',
                color:'#333333',
                letterSpacing:'-0.72px',
                textAlign:'center',
                paddingTop:'22px',
                paddingBottom:'22px',
                paddingLeft:'62px',
                paddingRight:'66px',
                border:'1px,solid #E1E1E1',
                borderRadius:'5px',
                backgroundColor:'#ffffff',
                margin:'18px',
            }

        }

        return (
            <div style={styles.content}>
                <span style={styles.titleText}>历史订单</span>
                <div style={styles.contentList}></div>
                <div style={styles.buttonLayout}>
                    {/*<text style={styles.buttonStyle}>返回厨显</text>*/}
                    {/*<text style={styles.buttonStyle}>上一页</text>*/}
                    {/*<text style={styles.buttonStyle}>下一页</text>*/}
                </div>
            </div>
        )
    }
}


export default HistoryPage