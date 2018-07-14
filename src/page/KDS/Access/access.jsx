import React from 'react'

class AccessSystemPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const styles = {
            accessSystemShowContent: {
                textAlign: 'center',
                background: '#ffffff',
                paddingTop: '60px',
                marginTop: '60px',
            },

            accessSystemTitleContent: {
                background: '#ffffff'
            },

            accessSystemSwitchContent: {
                background: '#ffffff'
            },

            accessSystemKeybroadContent: {
                background: '#ffffff',
                height: '767px',
                paddingBottom: '60px',
                marginBottom: '50px',
            },

            accessSystemBottomContent: {
                background: '#ffffff',
                height: '50px',
            },

        }


        return (
            <div>
                <div style={styles.accessSystemTitleContent}><AccessSystemPageTitle/></div>
                {/* <div style={styles.accessSystemSwitchContent}><AccessSystemPageSwitch /></div> */}
                <div style={styles.accessSystemShowContent}><AccessSystemPageShow/></div>
                <div style={styles.accessSystemKeybroadContent}><AccessSystemPageKeybroad/></div>
                <div style={styles.accessSystemBottomContent}><AccessSystemPageBottom/></div>
            </div>
        )
    }
}

class AccessSystemPageBottom extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            accessBottomContent: {
                display: 'flex',
                position: 'fixed',
                width: '100%',
                left: '0',
                bottom: '0',
            },

            accessBottomLeft: {
                flex: '1',
                textAlign: 'left',
                marginLeft: '40px',
                lineHeight: '50px',
            },

            accessBottomCenter: {
                flex: '1',
                textAlign: 'center',
                fontWeight: '900',
                lineHeight: '50px',
            },

            accessBottomRight: {
                flex: '1',
                textAlign: 'right',
                lineHeight: '50px',
                marginRight: '40px',
            }

        }

        return (
            <div style={styles.accessBottomContent}>
                <text style={styles.accessBottomLeft}>彩虹云宝网络有限公司 www.sanyipos.com</text>
                <text style={styles.accessBottomCenter}>当前版本: V5.51</text>
                <text style={styles.accessBottomRight}>联系客服: 0730-88971254</text>
            </div>
        )
    }
}


class AccessSystemPageKeybroad extends React.Component {
    constructor(props) {
        super(props)
        this.intent = this.intent.bind(this);
    }

    intent() {
        window.location.replace('/history')
    }

    render() {
        const styles = {
            accessKeybroadContent: {
                width: '700px',
                margin: 'auto',
            },

            accessKeybroadUnit: {
                float:'left',
                width: '150px',
                height: '100px',
                lineHeight:'100px',
                border: '1px solid gray',
                textAlign: 'center',
                marginLeft: '30px',
                marginRight: '30px',
                fontSize:'20px',
                marginTop:'10px',
                borderRadius: '7px',
            },

            accessKeybroadTable: {
                width: '600px',
            },

            acccessKeybroadButtonContent: {
                width: '700px',
                display: 'flex',
            },

            accessKeybroadButton: {
                width: '253px',
                height: '60px',
                border: '1px solid gray',
                textAlign: 'center',
                borderRadius: '7px',
                fontSize:'20px',
                marginLeft: '30px',
                marginRight: '30px',
                marginTop:'10px',
                lineHeight: '60px',
            },
        }

        return (
            <div style={styles.accessKeybroadContent}>
                <div>
                    <span style={styles.accessKeybroadUnit}>7</span>
                    <span style={styles.accessKeybroadUnit}>8</span>
                    <span style={styles.accessKeybroadUnit}>9</span>
                </div>
                <div>
                    <span style={styles.accessKeybroadUnit}>4</span>
                    <span style={styles.accessKeybroadUnit}>5</span>
                    <span style={styles.accessKeybroadUnit}>6</span>
                </div>
                <div>
                    <span style={styles.accessKeybroadUnit}>1</span>
                    <span style={styles.accessKeybroadUnit}>2</span>
                    <span style={styles.accessKeybroadUnit}>3</span>
                </div>
                <div>
                    <span style={styles.accessKeybroadUnit}>.</span>
                    <span style={styles.accessKeybroadUnit}>0</span>
                    <span style={styles.accessKeybroadUnit}>←</span>
                </div>
                {/*<table cellspacing="15" style={styles.accessKeybroadTable}>*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                {/*<td style={styles.accessKeybroadUnit}>7</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>8</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>9</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td style={styles.accessKeybroadUnit}>4</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>5</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>6</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td style={styles.accessKeybroadUnit}>1</td>*/}
                {/*<td style={styles.accessKeybro
                            adUnit}>2</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>3</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td style={styles.accessKeybroadUnit}>.</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>0</td>*/}
                {/*<td style={styles.accessKeybroadUnit}>←</td>*/}
                {/*</tr>*/}

                {/*</tbody>*/}
                {/*</table>*/}
                <div style={styles.acccessKeybroadButtonContent}>
                    <span style={styles.accessKeybroadButton}>清空</span>
                    <span style={styles.accessKeybroadButton} onClick={this.intent}>接入</span>
                </div>
            </div>

        )
    }
}




class AccessSystemPageShow extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const styles = {
            accessSwitch: {
                textAlign: 'center',
                fontSize: '40px',
                fontWeight: '300',
                width: '100%',
            },

            accessSwitchShop: {
                height: '40px',
                marginTop: '15px',
            },

            accessSwitchShopBorder: {
                border: '1px solid gray',
                borderRadius: '5px',
                position: 'relative',
                width:'60px',
                padding: '10px',
            },

            accessSwitchImg1: {
                position: 'relative',
                marginRight: '15px',
            },

            accessSwitchInput: {
                marginRight: '15px',
                width:'230px',
                border: '0px solid gray',
            },

            accessSwitchImg2: {
                position: 'relative',
            }
        }

        return (
            <div>
                <span style={styles.accessSwitch}>
                    门店接入
                </span>
                <div style={styles.accessSwitchShop}>
                    <img src={require('../../../pic/shop.png')} style={styles.accessSwitchImg1}/>
                    <span style={styles.accessSwitchShopBorder}>
                        <input style={styles.accessSwitchInput} placeholder={'门店接入码'}/>
                        <img src={require('../../../pic/input.png')} style={styles.accessSwitchImg2}/>
                    </span>
                </div>
                <div style={styles.accessSwitchShop}>
                    <img src={require('../../../pic/server.png')} style={styles.accessSwitchImg1}/>
                    <span style={styles.accessSwitchShopBorder}>
                        <input style={styles.accessSwitchInput} placeholder={'主机IP地址'}/>
                        <img src={require('../../../pic/input.png')} style={styles.accessSwitchImg2}/>
                    </span>
                </div>
            </div>
        )
    }
}

// class AccessSystemPageSwitch extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         const styles = {
//             accessSwitchText: {
//                 marginLeft: '15px',
//                 float: 'left',
//                 textAlign: 'center',
//                 lineHeight: '80px',
//                 fontSize: '20px',
//                 height: '80px',
//                 fontWeight: '600',
//             },

//             accessSwitchButton: {
//                 marginLeft: '40px',
//                 float: 'left',
//                 textAlign: 'center',
//                 lineHeight: '80px',
//                 height: '80px',
//             },
//         }

//         return (
//             <div style={{ height: '80px' }}>
//                 <span style={styles.accessSwitchButton}>
//                     <ModeButton />
//                 </span>
//                 <span style={styles.accessSwitchText}>KDS模式
//                 </span>
//             </div>
//         )
//     }
// }

// export class ModeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             touchState: false
//         }
//     }
//     touchStart() {
//         console.log("touch");
//         this.setState({ touchState: !this.state.touchState });
//     }
//     render() {

//         var src = require('../../../pic/' + "switch" + (this.state.touchState ? '_on.png' : '_off.png'));
//         return <div onTouchStart={this.touchStart.bind(this)}>
//             <img src={src} />
//         </div>;
//     }
// };


class AccessSystemPageTitle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            accessTitle: {
                height: '60px',
                lineHeight: '60px',
                background: '#888887',
                position: 'fixed',
                width: '100%',
                left: '0',
                top: '0',
            },


            accessTitleText1: {
                marginLeft: '50px',
                textAlign: 'center',
                fontSize: '30px',
                color: '#ffffff',
                height: '60px',

                textAlign: 'center',
            },

            accessTitleText2: {
                marginLeft: '10px',
                textAlign: 'center',
                fontSize: '20px',
                color: '#ffffff',
                textAlign: 'center',
            },
            accessTitleText3: {
                float: 'right',
                marginRight: '20px',
                height: '60px',
                fontWeight: '900',
                fontSize: '20px',
                color: '#ffffff',
                textAlign: 'center',
            },
            accessTitleText4: {
                float: 'right',
                marginRight: '20px',
                height: '60px',
                fontWeight: '900',
                fontSize: '20px',
                color: '#ffffff',
                textAlign: 'center',
                display: 'none',
            },
            accessTitleImg: {
                float: 'right',
                marginRight: '10px',
                lineHeight: '60px',
                marginTop: '14px',
            }
        }


        return (
            <div style={styles.accessTitle}>
                <span style={styles.accessTitleText1}>食通宝</span>
                <span style={styles.accessTitleText2}>收银系统</span>
                <span style={styles.accessTitleText3}>退出</span>
                <img style={styles.accessTitleImg} src={require('../../../pic/logout.png')}></img>
                <span style={styles.accessTitleText4}>__</span>
            </div>
        )
    }
}


export default AccessSystemPage