import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import {Row, Col} from 'antd';


class HistoryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNum: 2
        };

    }

    render() {

        return (

            <div>
                <div><PageTitle/></div>
                <div><HistoryPageContent list={orders} pageNum={this.state.pageNum}/></div>
                <div><PageBottom/></div>
            </div>
        )
    }
}

var orders = [{
    id: '1',
    name: '001桌',
    state: '已完成',
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
    id: '4',
    name: '028桌',
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
    id: '5',
    name: '饿了么#01',
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
    name: '美团#01',
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
    name: '美团#02',
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
    name: '美团#06',
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
    name: '美团#24',
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
    name: '美团#25',
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
    name: '美团#26',
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
    name: '美团#27',
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
    name: '美团#28',
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
    name: '美团#29',
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
}]


class HistoryPageContent extends React.Component {
    constructor(props) {
        super(props)


    }


    render() {

        var pageorders = [];
        if (this.props.list.length > (this.props.pageNum - 1) * 10) {
            if (this.props.list.length > this.props.pageNum * 10) {
                for (let i = 0; i < 10; i++) {
                    pageorders.push(this.props.list[(this.props.pageNum-1)*10+i])
                }
            }else{
                for (let i=0;i<this.props.list.length-(this.props.pageNum-1)*10;i++)
                {
                    pageorders.push(this.props.list[(this.props.pageNum-1)*10+i])
                }
            }
        }

        // console.log("222222222222" + this.props.list);
        var list1 = [];
        var list2 = [];

        var num = pageorders.length;
        var num2 = 0;
        if (num >= 10)
            num2 = 10;
        else
            num2 = num;
        if (pageorders.length > 5) {
            for (let i = 5; i < num2; i++) {
                list2.push(pageorders[i]);
            }
        }
        if (num >= 5)
            num2 = 5;
        else
            num2 = num;
        for (let i = 0; i < num2; i++) {
            list1.push(pageorders[i])
        }


        const
            styles = {
                content: {
                    backgroundColor: '#FBFBFB',
                    top: '74px',
                    bottom: '50px',
                    position: 'fixed',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                titleText: {
                    color: '#333333',
                    fontSize: '30px',
                    letterSpacing: '-0.72px',
                    paddingTop: '9px',
                    width: '100%',
                    textAlign: 'center',
                    position: 'fixed',
                    height: '67px'
                },

                buttonLayout: {
                    position: 'fixed',
                    bottom: '50px',
                    width: '100%',
                    backgroundColor: '#FBFBFB',
                    height: '128px',
                    textAlign: 'center'
                },
                buttonStyle: {
                    fontSize: '30px',
                    color: '#333333',
                    letterSpacing: '-0.72px',
                    textAlign: 'center',
                    paddingTop: '22px',
                    paddingBottom: '22px',
                    paddingLeft: '62px',
                    paddingRight: '66px',
                    border: '1px solid #E1E1E1',
                    borderRadius: '5px',
                    backgroundColor: '#ffffff',
                    margin: '18px',

                }, buttonsStyle: {
                    width: '100%',
                    bottom: '90px',
                    position: 'fixed'
                }, ordersContent: {
                    marginTop: '67px',
                    height: '100%',
                    marginBottom: '128px',
                }

            }

        return (

            <div style={styles.content}>
                <span style={styles.titleText}>历史订单</span>
                <div style={styles.ordersContent}>
                    <OrderListRow list={list1}/>
                    <OrderListRow list={list2}/>
                </div>
                <div style={styles.buttonLayout}>
                    <div style={styles.buttonsStyle}>
                        <text style={styles.buttonStyle}>返回厨显</text>
                        <text style={styles.buttonStyle}>上一页</text>
                        <text style={styles.buttonStyle}>下一页</text>
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
            rows.push(<Col className="gutter-row" span={5} key={order.id}><OrderItem order={order}
                                                                                     key={order.id}/></Col>);
        });


        const styles = {
            contentList: {
                width: '100%',
                height: '430px',
                backgroundColor: '#FBFBFB',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                paddingRight: '132px',
                marginBottom: '25px',
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
            showMore: false
        }

    }

    componentDidMount() {
        console.log("list高度 =" + this.refs.listheight.offsetHeight)
        console.log("整个item高度 =" + this.refs.orderitemheight.offsetHeight)
        console.log("list内容高度 =" + this.refs.listrealheight.offsetHeight);

        if (this.refs.listrealheight.offsetHeight > this.refs.orderitemheight.offsetHeight * 0.61) {
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
                height: '404px',
                border: '1px solid #464646',
            },
            orderItemTitle: {
                height: '44px',
                backgroundColor: '#383F4F'
            },
            orderItemName: {
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '400',
                float: 'left',
                marginLeft: '10px',
                lineHeight: '44px'
            },
            orderItemTime: {
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '400',
                float: 'right',
                marginRight: '10px',
                lineHeight: '44px'
            }, orderItemList: {
                height: '61%',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
            }, orderItemBottom: {
                backgroundColor: '#85A5D3',
                height: '56px',
                color: '#ffffff',
                fontSize: '24px',
                lineHeight: '56px',
                textAlign: 'center',
                width: '100%',
            },
            orderItemListItem: {
                position: 'relative',
            },
            orderItemListItemName: {
                color: '#333333',
                fontSize: '18px',
                fontWeight: '200',
                lineHeight: '35px',
                marginLeft: '10px',
                width: '65%',
                textAlign: 'bottom',
                whiteSpace: 'normal',
                wordBreak: 'break-all',
                wordWrap: 'break-word',

            },
            orderItemListIteNum: {
                color: '#333333',
                fontSize: '18px',
                fontWeight: '200',
                float: 'right',
                marginRight: '10px',
                lineHeight: '35px',
                textAlign: 'bottom',
                position: 'absolute',
                right: '0px',
                bottom: '0px'
            }, orderItemListShowMoreContent: {
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '10px',
                paddingBottom: '10px',
                height: '57px',
                width: '100%',
                backgroundColor: '#ffffff',

            },
            orderItemListShowMore: {
                color: '#4A90E2',
                fontSize: '18px',
                border: '1px solid #4A90E2',
                borderRadius: '3px',
                lineHeight: '36px',
                textAlign: 'center',

            },
            orderItemListShowMoreNoText: {
                color: '#ffffff',
                fontSize: '18px',
                border: '1px solid #ffffff',
                borderRadius: '3px',
                lineHeight: '36px',
                textAlign: 'center',
            }, orderItemRemark: {
                backgroundColor: '#E4E4E4',
                margin: '8px',
                padding: '6px',
                color: '#535353',
                fontSize: '16px'
            }


        }

        var orderlist = [];
        for (let i = 0; i < this.props.order.list.length; i++) {
            orderlist.push(<div style={styles.orderItemListItem} key={i}>
                <div style={styles.orderItemListItemName}>{this.props.order.list[i].foodname}</div>
                <div
                    style={styles.orderItemListIteNum}
                    key={i}>{this.props.order.list[i].foodnum + this.props.order.list[i].foodunit}</div>
            </div>);
        }
        if (this.props.order.remark.length > 0)
            orderlist.push(<div style={styles.orderItemRemark}>
                {this.props.order.remark}
            </div>)


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
            {orderItemTitle}
            {orderItemList}
            {orderItemListShowMoreContent}
            {orderItemBottom}
        </div>)


        return (
            <div ref='orderitemheight'>
                {orderItem2}
            </div>
        )
    }
}


export default HistoryPage