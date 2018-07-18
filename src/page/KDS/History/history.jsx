import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import {Row, Col, Modal, Button, Pagination} from 'antd';


class HistoryPage extends React.Component {
    constructor(props) {
        super(props)

        this.toHistory = this.toHistory.bind(this);
        this.choiceStall=this.choiceStall.bind(this);

    }

    toHistory() {
        window.location.replace('/history')
    }

    choiceStall(){
        alert('选择档口')
    }


    render() {

        return (

            <div>
                <div><PageTitle stallname={'面档口（M01)'} choiceStall={this.choiceStall}/></div>
                <div><HistoryPageContent list={orders}/></div>
                <div><PageBottom
                    toHistory={this.toHistory}/></div>
            </div>
        )
    }
}

var orders = [{
    id: '1',
    name: '001桌',
    state: '已完成',
    time: '14：23',
    remark: '加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣加辣',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }]
}, {
    id: '2',
    name: '002桌',
    state: '已完成',
    time: '13：11',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '3',
    name: '003桌',
    state: '已取消',
    time: '14：23',
    remark: '奥斯卡大家好就考试了的看法结算单',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '4',
    name: '004桌',
    state: '已完成',
    time: '15：28',
    remark: '钢化膜那个表那电饭锅丰东股份',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '5',
    name: '饿了么#005',
    state: '已完成',
    time: '17：45',
    remark: '',
    list: [{
        foodname: '黑椒鸡柳饭套餐+豆浆111111111111111111111',
        foodnum: '1',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '宫保鸡丁饭套餐+例汤',
        foodnum: '1',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '双蛋肠粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '阿华田',
        foodnum: '2',
        foodunit: '杯'
    }, {
        foodname: '叉烧包',
        foodnum: '2',
        foodunit: '个'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '双蛋肠粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '阿华田',
        foodnum: '2',
        foodunit: '杯'
    }, {
        foodname: '叉烧包',
        foodnum: '2',
        foodunit: '个'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }, {
        foodname: '双蛋肠粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '阿华田',
        foodnum: '2',
        foodunit: '杯'
    }, {
        foodname: '叉烧包',
        foodnum: '2',
        foodunit: '个'
    }, {
        foodname: '豉汁蒸凤爪',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '皮蛋瘦肉粥',
        foodnum: '2',
        foodunit: '碗'
    }]
}, {
    id: '6',
    name: '美团#006',
    state: '已完成',
    time: '14：34',
    remark: '香辣粉加辣加麻，再要一点香菜',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '7',
    name: '美团#007',
    state: '已完成',
    time: '16：52',
    remark: '香辣粉加辣加麻，再要一点香菜',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '8',
    name: '美团#008',
    state: '已完成',
    time: '17：53',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '9',
    name: '美团#009',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '10',
    name: '美团#010',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '11',
    name: '美团#011',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '12',
    name: '美团#012',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '13',
    name: '美团#013',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '14',
    name: '美团#014',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '15',
    name: '美团#015',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '16',
    name: '美团#016',
    state: '已完成',
    time: '19：45',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '17',
    name: '017桌',
    state: '已完成',
    time: '13：11',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '18',
    name: '018桌',
    state: '已取消',
    time: '14：23',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '19',
    name: '019桌',
    state: '已完成',
    time: '15：28',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '20',
    name: '020桌',
    state: '已完成',
    time: '15：28',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '21',
    name: '021桌',
    state: '已完成',
    time: '15：28',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}, {
    id: '22',
    name: '022桌',
    state: '已完成',
    time: '15：28',
    remark: '',
    list: [{
        foodname: '椰汁桃胶',
        foodnum: '2',
        foodunit: '份'
    }, {
        foodname: '香辣粉',
        foodnum: '1',
        foodunit: '碗'
    }, {
        foodname: '冻柠檬茶',
        foodnum: '1',
        foodunit: '杯'
    }]
}]


class HistoryPageContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageMax: this.props.list.length / 10,
            hasNextPage: this.props.list.length > 10 ? true : false,
            pages: 1,
            list1: this.props.list.slice(0, 5),
            list2: this.props.list.slice(5, 10),

        }

        this.onLastPage = this.onLastPage.bind(this);
        this.onNextPage = this.onNextPage.bind(this);
        this.toHome=this.toHome.bind(this);

    }


    onLastPage() {
        if (this.state.pages > 1) {
            this.setState({
                pages: this.state.pages - 1,
            }, () => {
                this.state.list1.push(this.props.list.slice(0 + (this.state.pages - 1) * 10, 5 + (this.state.pages - 1) * 10))
                this.state.list2.push(this.props.list.slice(5 + (this.state.pages - 1) * 10, 10 + (this.state.pages - 1) * 10))

                if (this.props.list.length > this.state.pages * 10) {
                    this.setState({
                        hasNextPage: true,
                        list1: this.props.list.slice(0 + (this.state.pages - 1) * 10, 5 + (this.state.pages - 1) * 10),
                        list2: this.props.list.slice(5 + (this.state.pages - 1) * 10, 10 + (this.state.pages - 1) * 10)
                    });
                } else
                    this.setState({
                        hasNextPage: false,
                        list1: this.props.list.slice(0 + (this.state.pages - 1) * 10, 5 + (this.state.pages - 1) * 10),
                        list2: this.props.list.slice(5 + (this.state.pages - 1) * 10, 10 + (this.state.pages - 1) * 10)
                    })
            })
        }


    }

    onNextPage() {
        if (this.state.hasNextPage) {
            this.setState({
                pages: this.state.pages + 1
            }, () => {

                if (this.props.list.length > this.state.pages * 10) {

                    this.setState({
                        hasNextPage: true,
                        list1: this.props.list.slice(0 + (this.state.pages - 1) * 10, 5 + (this.state.pages - 1) * 10),
                        list2: this.props.list.slice(5 + (this.state.pages - 1) * 10, 10 + (this.state.pages - 1) * 10)
                    });


                } else {
                    this.setState({
                        hasNextPage: false,
                        list1: this.props.list.slice(0 + (this.state.pages - 1) * 10),
                        list2: this.props.list.slice(5 + (this.state.pages - 1) * 10)
                    });
                }
            })
        }

        else {
            Modal.info({
                title:
                    '提示',
                content:
                    (
                        <div>
                            <p>已经是最后一页了</p>
                        </div>
                    ),
                onOk() {
                }
                ,
            })
            ;

        }
    }

    toHome(){
        window.location.replace('/home')
    }


    render() {


        const
            styles = {
                content: {
                    backgroundColor: '#FBFBFB',
                    top: '34px',
                    bottom: '50px',
                    position: 'fixed',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                titleText: {
                    color: '#333333',
                    fontSize: '20px',
                    letterSpacing: '-0.72px',
                    paddingTop: '9px',
                    width: '100%',
                    textAlign: 'center',
                    position: 'fixed',
                    height: '50px'
                },

                buttonLayout: {
                    position: 'fixed',
                    bottom: '30px',
                    width: '100%',
                    backgroundColor: '#FBFBFB',
                    height: '68px',
                    textAlign: 'center'
                },
                buttonStyle: {
                    fontSize: '18px',
                    color: '#333333',
                    letterSpacing: '-0.72px',
                    textAlign: 'center',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '52px',
                    paddingRight: '56px',
                    border: '1px solid #E1E1E1',
                    borderRadius: '5px',
                    backgroundColor: '#ffffff',
                    margin: '12px',

                }, buttonStyle2: {
                    fontSize: '18px',
                    color: '#E1E1E1',
                    letterSpacing: '-0.72px',
                    textAlign: 'center',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '52px',
                    paddingRight: '56px',
                    border: '1px solid #E1E1E1',
                    borderRadius: '5px',
                    backgroundColor: '#ffffff',
                    margin: '12px',

                }, buttonsStyle: {
                    width: '100%',
                    bottom: '50px',
                    position: 'fixed'
                }, ordersContent: {
                    marginTop: '50px',
                    height: '100%',
                    marginBottom: '88px',
                }

            }

        return (

            <div style={styles.content}>
                <span style={styles.titleText}>历史订单</span>
                <div style={styles.ordersContent}>
                    <OrderListRow list={this.state.list1}/>
                    <OrderListRow list={this.state.list2}/>

                </div>
                <div style={styles.buttonLayout}>
                    <div style={styles.buttonsStyle}>
                        <span style={styles.buttonStyle} onClick={this.toHome}>返回厨显</span>
                        <span style={this.state.pages === 1 ? styles.buttonStyle2 : styles.buttonStyle}
                              onClick={this.onLastPage}>上一页
                        </span>
                        <span style={this.state.hasNextPage ? styles.buttonStyle : styles.buttonStyle2}
                              onClick={this.onNextPage}>下一页
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

class OrderListRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var rows = [];

        this.props.list.forEach((order) => {
            if (!order) {
                return;
            }
            rows.push(<Col className="gutter-row" span={5} key={order.id}><OrderItem order={order}/></Col>);
        });

        const styles = {
            contentList: {
                width: '100%',
                height: '300px',
                backgroundColor: '#FBFBFB',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                paddingRight: '112px',
                marginBottom: '10px',
            },
        }

        return (
            <Row gutter={16} style={styles.contentList}>
                {rows}
            </Row>
            // <div style={styles.contentList}>
            //     {rows}
            // </div>
        )
    }
}

class OrderItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showMore: false,
            modalCurrentPage: 1,
        }


        this.onPageLast = this.onPageLast.bind(this);
        this.onPageNext = this.onPageNext.bind(this);
        this.clickremark=this.clickremark.bind(this);


    }

    clickremark(i){

                alert(this.props.order.list[i].foodname+this.props.order.list[i].foodnum + this.props.order.list[i].foodunit)

    }

    onPageLast() {

        if (this.state.modalCurrentPage === 1) {

        } else {
            this.setState({
                modalCurrentPage: this.state.modalCurrentPage - 1,
            });
        }

    }

    onPageNext() {

        if (this.props.order.list.length > this.state.modalCurrentPage * 14) {
            this.setState({
                modalCurrentPage: this.state.modalCurrentPage + 1,
            });
        } else {
            Modal.info({
                title: '提示',
                content: (
                    <div>
                        <p>已经是最后一页了</p>
                    </div>
                ),
                onOk() {
                },
            });
        }
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    hideModal = () => {
        this.setState({
            visible: false,
        });
    }


    componentDidMount() {
        if (this.refs.listrealheight.offsetHeight > this.refs.orderitemheight.offsetHeight * 0.62) {
            this.setState({
                showMore: true
            });
        }
    }


    render() {


        const styles = {
            orderItemContent: {
                marginLeft: '37px',
                marginRight: '37px',
                width: '100%',
                height: '274px',
                border: '1px solid #464646',
                backgroundColor: '#ffffff'
            },
            orderItemContentClick: {
                width: '100%',
                height: '238px',
            },
            orderItemTitle: {
                height: '44px',
                backgroundColor: '#383F4F'
            },
            orderItemName: {
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '400',
                float: 'left',
                marginLeft: '10px',
                lineHeight: '44px'
            },
            orderItemTime: {
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '400',
                float: 'right',
                marginRight: '10px',
                lineHeight: '44px'
            },
            orderItemList: {
                height: '62%',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
            },
            orderItemBottom: {
                backgroundColor: '#85A5D3',
                height: '36px',
                color: '#ffffff',
                fontSize: '16px',
                lineHeight: '36px',
                textAlign: 'center',
                width: '100%',
            },
            orderItemListItem: {
                position: 'relative',
                borderBottom: '1px #000000 solid'
            },
            orderItemListItemName: {
                color: '#333333',
                fontSize: '20px',
                fontWeight: '200',
                lineHeight: '25px',
                marginLeft: '10px',
                width: '65%',
                textAlign: 'bottom',
                whiteSpace: 'normal',
                wordBreak: 'break-all',
                wordWrap: 'break-word',

            },
            orderItemListIteNum: {
                color: '#333333',
                fontSize: '20px',
                fontWeight: '200',
                float: 'right',
                marginRight: '10px',
                lineHeight: '25px',
                textAlign: 'bottom',
                position: 'absolute',
                right: '0px',
                bottom: '0px'
            },
            orderItemListShowMoreContent: {
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '2px',
                paddingBottom: '2px',
                height: '27px',
                width: '100%',
                backgroundColor: '#ffffff',
                marginTop: '10px'
            },
            orderItemListShowMore: {
                color: '#4A90E2',
                fontSize: '13px',
                border: '1px solid #4A90E2',
                borderRadius: '3px',
                lineHeight: '27px',
                textAlign: 'center',

            },
            orderItemListShowMoreNoText: {
                color: '#ffffff',
                fontSize: '13px',
                border: '1px solid #ffffff',
                borderRadius: '3px',
                lineHeight: '27px',
                textAlign: 'center',
            },
            orderItemRemark: {
                backgroundColor: '#E4E4E4',
                margin: '8px',
                padding: '6px',
                color: '#535353',
                fontSize: '12px'
            },

            modalTitle: {
                display: 'flex',
                flexDirection: 'row',
            },

            modalTitleTime: {},

            modalTitleName: {
                float: 'left',
                marginLeft: '178px'
            },
            buttonStyleLast: {
                fontSize: '12px',
                color: '#333333',
                letterSpacing: '-0.72px',
                textAlign: 'center',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '22px',
                paddingRight: '26px',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                backgroundColor: '#ffffff',
                marginLeft: '80px',
            },
            buttonStyleNext: {
                fontSize: '12px',
                color: '#333333',
                letterSpacing: '-0.72px',
                textAlign: 'center',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '22px',
                paddingRight: '26px',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                backgroundColor: '#ffffff',
                marginLeft: '50px',

            },
            buttonStylePrint: {
                fontSize: '12px',
                color: '#ffffff',
                letterSpacing: '-0.72px',
                textAlign: 'center',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '22px',
                paddingRight: '26px',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                backgroundColor: '#85A5D3',
                marginLeft: '80px',

            }

        }

        var orderlist = [];
        if (this.props.order.list) {
            for (let i = 0; i < this.props.order.list.length; i++) {
                var orderList = <div style={styles.orderItemListItem} key={i} onClick={()=>this.clickremark(i)}>
                    <div style={styles.orderItemListItemName}>{this.props.order.list[i].foodname}</div>
                    <div
                        style={styles.orderItemListIteNum}
                    >{this.props.order.list[i].foodnum + this.props.order.list[i].foodunit}</div>
                </div>
                orderlist.push(orderList)
            }

            if (this.props.order.remark.length > 0)
                orderlist.push(<div key={this.props.order.id} style={styles.orderItemRemark}>
                    {this.props.order.remark}
                </div>)

        }
        var orderItemTitle = [];
        var orderItemList = [];
        var orderItemListShowMoreContent = [];
        var orderItemBottom = [];
        var orderItem2 = [];
        orderItemTitle.push(<div style={styles.orderItemTitle}>
            <span style={styles.orderItemName}>{this.props.order.name}</span>
            <span style={styles.orderItemTime}>{this.props.order.time}</span>
        </div>)
        orderItemList.push(<div style={styles.orderItemList} ref='listheight'>
            <div ref='listrealheight'>
                {orderlist}
            </div>
        </div>)
        if (this.state.showMore)
            orderItemListShowMoreContent.push(<div style={styles.orderItemListShowMoreContent}>
                <div style={styles.orderItemListShowMore}>显示更多</div>

            </div>)
        else
            orderItemListShowMoreContent.push(<div style={styles.orderItemListShowMoreContent}>
                <div style={styles.orderItemListShowMoreNoText}/>
            </div>)
        orderItemBottom.push(<div style={styles.orderItemBottom}>
            重打小票
        </div>)

        orderItem2.push(<div style={styles.orderItemContent}>
            <div style={styles.orderItemContentClick} onClick={this.state.showMore ? this.showModal : null}>
                {orderItemTitle}
                {orderItemList}
                {orderItemListShowMoreContent}
            </div>
            {orderItemBottom}
        </div>)


        return (
            <div ref='orderitemheight'>
                {orderItem2}

                <Modal
                    title={
                        <div style={styles.modalTitle}>
                            <div style={styles.modalTitleTime}>{this.props.order.time}</div>
                            <div style={styles.modalTitleName}>{this.props.order.name}</div>
                        </div>

                    }
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    footer={
                        <div style={styles.modalTitle}>

                            <div style={styles.buttonStyleLast} onClick={this.onPageLast}>上一页</div>
                            <div style={styles.buttonStyleNext} onClick={this.onPageNext}>下一页</div>
                            <div style={styles.buttonStylePrint}>重打小票</div>

                        </div>

                    }
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <div>
                        {orderlist.slice(14 * (this.state.modalCurrentPage - 1), 14 + 14 * (this.state.modalCurrentPage - 1))}
                    </div>
                </Modal>
            </div>
        )
    }
}


export default HistoryPage