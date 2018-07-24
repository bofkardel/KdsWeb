import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'
import {Table, Button, Input, Icon, Popconfirm, Alert} from 'antd';

class HomePage extends React.Component {

    constructor(props) {
        super(props);


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

        const styles = {}

        return (
            <div>
                <div><PageTitle stallname={'面档口(M01)'} choiceStall={this.choiceStall}/></div>
                <div><HomePageContent/></div>
                <div><PageBottom
                    toHistory={this.toHistory}
                /></div>
            </div>
        )
    }
}


class HomePageContent extends React.Component {
    constructor(props) {
        super(props)

        this._open = this._open.bind(this);
        this._close = this._close.bind(this);
        this._filter = this._filter.bind(this);
        this._kitchNext = this._kitchNext.bind(this);
        this._kitchLast = this._kitchLast.bind(this);
        this.tick = this.tick.bind(this);
        this._guaqi = this._guaqi.bind(this);
        this._callUp = this._callUp.bind(this);
        this._sayNext = this._sayNext.bind(this);
        this._getPageOrder = this._getPageOrder.bind(this);
        this._getSayOrder = this._getSayOrder.bind(this);
        this._successly = this._successly.bind(this);

        this.state = {
            orderInfo: [],
            waimaiInfo: [
                {
                    goodsDetails: [
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'}
                    ],
                    status: 1, orderId: 1,
                    orderName: '002桌',
                    creatTime: '2018-7-11 09:45:00'
                }
                ,
                {
                    goodsDetails: [
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'}
                    ],
                    status: 1, orderId: 1,
                    orderName: '003桌',
                    creatTime: '2018-7-11 09:45:00'
                },
                {
                    goodsDetails: [
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'}
                    ],
                    status: 1, orderId: 1,
                    orderName: '003桌',
                    creatTime: '2018-7-11 09:45:00'
                }


            ],
            sayInfo: [
                {
                    goodsDetails: [
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'}
                    ],
                    status: 1, orderId: 1,
                    orderName: '002桌',
                    creatTime: '2018-7-11 09:45:00'
                }
                ,
                {
                    goodsDetails: [
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'},
                        {goodName: '香辣粉', count: 2, unitType: '份'}
                    ],
                    status: 1, orderId: 1,
                    orderName: '003桌',
                    creatTime: '2018-7-11 09:45:00'
                }


            ],
            pageInfo: [
                {list: []}
            ],
            showKitchen: [],
            pageSay: [],
            showSay: [],
            kitchPage: 0,
            sayPage: 0
        }



    }

    tick = (value) => {

        value.forEach(io => {
            var nowDate1 = new Date();
            var nowDate2 = new Date(io.creatTime);
            var dateTime = 1000 * 60 * 60 * 24;
            var hourDays = Math.floor((nowDate1 - nowDate2) / (1000 * 60 * 60));
            var minusDays = Math.floor(((nowDate1 - nowDate2) / (1000 * 60)) - (hourDays * 60));
            var secondsDays = Math.floor(((nowDate1 - nowDate2) / (1000)) - (hourDays * 60 * 60) - (minusDays * 60));
            if (minusDays < 5) {
                io.color = 'isGreen'
            } else if (minusDays >= 5 && minusDays < 10) {
                io.color = 'isYellow'
            } else {
                io.color = 'isRed'
            }
            io.endTime = hourDays + ':' + minusDays + ':' + secondsDays;
        });
        this.setState({
            showKitchen: value
        })

    }
    _getPageOrder(){
      fetch('/smartpos/kds/order/27', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "sanyi-device-id":"4036",
                        "sanyi-shop-id":"13",
                        "sanyi-version-code":"1",
                        "sanyi-product-code":"1"

                    }
                }).then(response => response.json()).then(res=> {
                  if(res.length>0){
                    var allOrder=[];
                    res.forEach(function(io){
                        var oneOrder={goodsDetails:[]};
                        io.kdsGoods.forEach(function(ko){
                            var oneGood={};
                            oneGood.goodName=ko.goodsLite.goodsName;
                            oneGood.unitType=ko.goodsLite.unitTypeName;
                            oneGood.count=ko.kdsDetailLite.quantity;
                            oneOrder.goodsDetails.push(oneGood);
                        });
                        oneOrder.orderId=io.order;
                        oneOrder.status=io.kdsGoods[0].kdsDetailLite.state;
                        oneOrder.creatTime=io.kdsGoods[0].kdsDetailLite.createon;
                        oneOrder.orderName=io.kdsGoods[0].kdsDetailLite.tableName;
                        allOrder.push(oneOrder);
                    });
                    this.setState({orderInfo:allOrder})
                    this._filter();
                    console.log(allOrder);
                  }

      });
    }
    _getSayOrder(){
      fetch('/smartpos/kds/order/hold/27', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "sanyi-device-id":"4036",
                        "sanyi-shop-id":"13",
                        "sanyi-version-code":"1",
                        "sanyi-product-code":"1"

                    }
                }).then(response => response.json()).then(res=> {
                  var allOrder=[];
                  res.forEach(function(io){
                      var oneOrder={goodsDetails:[]};
                      io.kdsGoods.forEach(function(ko){
                          var oneGood={};
                          oneGood.goodName=ko.goodsLite.goodsName;
                          oneGood.unitType=ko.goodsLite.unitTypeName;
                          oneGood.count=ko.kdsDetailLite.quantity;
                          oneOrder.goodsDetails.push(oneGood);
                      });
                      oneOrder.orderId=io.order;
                      oneOrder.status=io.kdsGoods[0].kdsDetailLite.state;
                      oneOrder.creatTime=io.kdsGoods[0].kdsDetailLite.createon;
                      oneOrder.orderName=io.kdsGoods[0].kdsDetailLite.tableName;
                      allOrder.push(oneOrder);
                  });
                  var showSay = allOrder.slice(0,2);
                  this.setState({
                    pageSay:allOrder,
                    showSay:showSay
                  })
                  console.log(res);
      });
    }
    componentDidMount() {
      this._getPageOrder();
      this._getSayOrder();
    }

    _open(value) {
        this.setState({
            isopen: true
        })
    }

    _close(value) {
        this.setState({
            isopen: false
        })
    }

    _kitchNext(value) {
        if (this.state.kitchPage < this.state.pageInfo.length - 1) {
            var nowPage = this.state.kitchPage + 1;
            this.state.pageInfo[nowPage].list.forEach(io => {
                var nowDate1 = new Date();
                var nowDate2 = new Date(io.creatTime);
                var dateTime = 1000 * 60 * 60 * 24;
                var hourDays = Math.floor((nowDate1 - nowDate2) / (1000 * 60 * 60));
                var minusDays = Math.floor(((nowDate1 - nowDate2) / (1000 * 60)) - (hourDays * 60));
                var secondsDays = Math.floor(((nowDate1 - nowDate2) / (1000)) - (hourDays * 60 * 60) - (minusDays * 60));
                if (minusDays < 5) {
                    io.color = 'isGreen'
                } else if (minusDays >= 5 && minusDays < 10) {
                    io.color = 'isYellow'
                } else {
                    io.color = 'isRed'
                }
                io.endTime = hourDays + ':' + minusDays + ':' + secondsDays;
            });
            this.setState({
                showKitchen: this.state.pageInfo[nowPage].list,
                kitchPage: nowPage
            });

        } else {
            alert("已经是最后一页了!")
        }

    }
    _sayNext(value) {
      console.log(Math.ceil((this.state.pageSay.length/2)));
        if (this.state.sayPage < Math.ceil((this.state.pageSay.length/2))-1) {
            var nowPage = this.state.sayPage + 1;
            var showSay=this.state.pageSay;
            this.setState({
                showSay: showSay.slice(nowPage*2,nowPage*2+2),
                sayPage: nowPage
            });
        } else {
            alert("已经是最后一页了!")
        }

    }

    _guaqi(value) {


        fetch('/smartpos/kds/order/hold/27', {
                      method: 'POST',
                      headers: {
                          "Content-Type": "application/json; charset=UTF-8",
                          "sanyi-device-id":"4036",
                          "sanyi-shop-id":"13",
                          "sanyi-version-code":"1",
                          "sanyi-product-code":"1"

                      },
                      body: JSON.stringify({
                        "value":this.state.showKitchen[value].orderId
                      })
                  }).then(response => response.json()).then(res=> {
                    var pageSay=this.state.pageSay;
                    console.log(value);
                    pageSay.push(this.state.showKitchen[value]);
                    var showSay = pageSay.slice(this.state.sayPage*2,2);
                    var pageKitchen = this.state.showKitchen;
                    pageKitchen.splice(value, 1);
                    this.setState({
                        showKitchen: pageKitchen,
                        pageSay:pageSay,
                        showSay:showSay
                    });
        });



        // this.interval = setInterval(() => this.tick(this.state.pageInfo[this.state.kitchPage].list),1000);
    }
    _callUp(value){

      fetch('/smartpos/kds/order/cook/27', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "sanyi-device-id":"4036",
                        "sanyi-shop-id":"13",
                        "sanyi-version-code":"1",
                        "sanyi-product-code":"1"

                    },
                    body: JSON.stringify({
                      "value":this.state.showSay[value].orderId
                    })
                }).then(response => response.json()).then(res=> {
                  clearInterval(this.interval);
                  this._getPageOrder();
                  this._getSayOrder();
                  // var pageSay=this.state.pageSay;
                  // console.log(value);
                  // pageSay.push(this.state.showKitchen[value]);
                  // var showSay = pageSay.slice(this.state.sayPage*2,2);
                  // var pageKitchen = this.state.showKitchen;
                  // pageKitchen.splice(value, 1);
                  // this.setState({
                  //     showKitchen: pageKitchen,
                  //     pageSay:pageSay,
                  //     showSay:showSay
                  // });
                  console.log(res);
      });
    }
    _successly(value){

      fetch('/smartpos/kds/order/ack/27', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        "sanyi-device-id":"4036",
                        "sanyi-shop-id":"13",
                        "sanyi-version-code":"1",
                        "sanyi-product-code":"1"

                    },
                    body: JSON.stringify({
                      "value":this.state.showKitchen[value].orderId
                    })
                }).then(response => response.json()).then(res=> {
                  clearInterval(this.interval);
                  this._getPageOrder();
                  // var pageSay=this.state.pageSay;
                  // console.log(value);
                  // pageSay.push(this.state.showKitchen[value]);
                  // var showSay = pageSay.slice(this.state.sayPage*2,2);
                  // var pageKitchen = this.state.showKitchen;
                  // pageKitchen.splice(value, 1);
                  // this.setState({
                  //     showKitchen: pageKitchen,
                  //     pageSay:pageSay,
                  //     showSay:showSay
                  // });
                  console.log(res);
      });
    }

    _kitchLast(value) {
        if (this.state.kitchPage > 0) {
            var nowPage = this.state.kitchPage - 1;
            this.state.pageInfo[nowPage].list.forEach(io => {
                var nowDate1 = new Date();
                var nowDate2 = new Date(io.creatTime);
                var dateTime = 1000 * 60 * 60 * 24;
                var hourDays = Math.floor((nowDate1 - nowDate2) / (1000 * 60 * 60));
                var minusDays = Math.floor(((nowDate1 - nowDate2) / (1000 * 60)) - (hourDays * 60));
                var secondsDays = Math.floor(((nowDate1 - nowDate2) / (1000)) - (hourDays * 60 * 60) - (minusDays * 60));
                if (minusDays < 5) {
                    io.color = 'isGreen'
                } else if (minusDays >= 5 && minusDays < 10) {
                    io.color = 'isYellow'
                } else {
                    io.color = 'isRed'
                }
                io.endTime = hourDays + ':' + minusDays + ':' + secondsDays;
            });
            this.setState({
                showKitchen: this.state.pageInfo[nowPage].list,
                kitchPage: nowPage
            });
        } else {
            alert("已经是第一页了!")
        }

    }
    _sayLast(value) {
        if (this.state.kitchPage > 0) {

        } else {
            alert("已经是第一页了!")
        }

    }

    _filter(value) {
        var pageInfo = [];
        var page = 0;
        var count = 0;
        var list = [];
        // console.log(this.state);
        for (var i = 0; i < this.state.orderInfo.length; i++) {
            // console.log(this.state.orderInfo[i].goodsDetails);
            if (this.state.orderInfo[i].goodsDetails.length > 6) {


                count = count + 2;
                if (count >= 5) {

                    pageInfo[page] = {};
                    pageInfo[page].list = list;

                    count = 2;
                    list = [];
                    page++;
                }
                if (i == this.state.orderInfo.length - 1) {
                    count = 6;
                }
                list.push(this.state.orderInfo[i]);
            } else {
                list.push(this.state.orderInfo[i]);
                count++;
                if (i == this.state.orderInfo.length - 1) {
                    count = 6;
                }
            }
            if (count == 6) {

                pageInfo[page] = {};
                pageInfo[page].list = list;
                page++;
                count = 0;
                list = [];
            }

        }
        console.log(pageInfo);
        this.setState({
            pageInfo: pageInfo,
            showKitchen: pageInfo[0].list
        });
        this.tick(pageInfo[this.state.kitchPage].list);
        this.interval = setInterval(() => this.tick(pageInfo[this.state.kitchPage].list), 1000);


        // this.data.orderInfo.forEach(io=>{
        //   if(io){
        //
        //   }
        // });
    }


    render() {

        const styles = {
            content: {
                backgroundColor: '#FBFBFB',
                top: '34px',
                bottom: '30px',
                position: 'fixed',
                width: '100%',
                paddingBottom: '20px',
                userSelect:'none'
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
            contentList: {
                width: '100%',
                height: '100%',
                backgroundColor: 'blue',
                marginTop: '67px',
                paddingBottom: '127px',
                boxSizing: 'border-box',
            },
            buttonLayout: {
                width: '724',
                position: 'fixed',
                backgroundColor: 'green',
                bottom: '50px',
                width: '100%',
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
                border: '1px,solid #E1E1E1',
                borderRadius: '5px',
                backgroundColor: '#ffffff',
                margin: '18px',
            },
            left: {
                width: '60%',
                height: '100%',
                float: 'left',
                textAlign: 'center',
                fontSize: '30px',
                color: '#333333',
                borderRight: '1px solid gray',
                marginTop: '10px'
            },
            right: {
                width: '40%',
                height: '100%',
                float: 'left',
                textAlign: 'center',
                fontSize: '30px',
                color: '#333333',
                borderLeft: '1px solid gray',
                marginTop: '10px'
            },
            listleft: {
                float: 'left',
                width: '28.5%',
                border: '1px solid gray',
                minHeight: '265px',
                marginTop: '4px',
                marginLeft: '3.5%',
            },
            listPanel: {
                float: 'left',
                width: '90%',
                border: '1px solid gray',
                minHeight: '40%',
                marginTop: '25px',
                marginLeft: '5%',
                marginRight: '5%'
            },
            sayPanel: {
                float: 'left',
                width: '90%',
                border: '1px solid gray',
                minHeight: '30%',
                marginTop: '4px',
                marginLeft: '5%',
                marginRight: '5%'
            },
            waimaListLeft: {
                float: 'left',
                width: '42%',
                border: '1px solid gray',
                minHeight: '220px',
                marginTop: '4px',
                marginLeft: '2.5%',
            },
            listheaderRed: {
                fontFamily: 'PingFangSC-Regular',
                backgroundColor: '#FE2D2D',
                height: '44px',
                color: '#fff',
                fontSize: '16px'
            },
            listheaderGreen: {
                fontFamily: 'PingFangSC-Regular',
                backgroundColor: '#7BD559',
                height: '44px',
                color: '#fff',
                fontSize: '16px'
            },
            listheaderYellow: {
                fontFamily: 'PingFangSC-Regular',
                backgroundColor: '#FF8700',
                height: '44px',
                color: '#fff',
                fontSize: '16px'
            },
            listheaderSay: {
                fontFamily: 'PingFangSC-Regular',
                backgroundColor: '#85A5D3',
                height: '44px',
                color: '#fff',
                fontSize: '16px'

            },
            orderName: {
                float: 'left',
                marginTop: '8px',
                marginLeft: '8px'
            },
            orderRight: {
                float: 'right',
                marginRight: '8px'
            },
            orderBtn: {
                background: '#85A5D3',
                borderRadius: '2px',
                width: '51px',
                height: '30px',
                marginTop: '6px',
                border: '0px solid #fff',
                cursor: 'pointer'
            },
            goodsLeft: {
                float: 'left',
                color: '#333333',
                fontSize: '16px',
                marginLeft: '8px',
                fontWeight: '350',
            },
            goodRow: {
                width: '100%',
                float: 'left',
                marginTop: '3px',
                borderBottom: '2px solid gray'
            },
            goodsRight: {
                float: 'right',
                color: '#333333',
                fontSize: '17px',
                marginRight: '8px',
                fontFamily: 'Arial'
            },
            goodsList: {
                minHeight: '220px',
                position: 'relative'
            },
            goodsLongList: {
                minHeight: '490px',
                float: 'left',
                position: 'relative',
            },
            sayList: {
                minHeight: '220px',
                maxHeight: '230px',
                position: 'relative',
                overflowY:'hidden'
            },
            listFooterRed: {
                position: 'absolute',
                bottom: '0',
                height: '41px',
                backgroundColor: '#FE2D2D',
                cursor: 'pointer',
                width: '100%',
                float: 'left'
            },
            listFooterGreen: {
                position: 'absolute',
                bottom: '0',
                height: '41px',
                backgroundColor: '#7BD559',
                cursor: 'pointer',
                width: '100%',
                float: 'left'
            },
            listFooterYellow: {
                position: 'absolute',
                bottom: '0',
                height: '41px',
                backgroundColor: '#FF8700',
                cursor: 'pointer',
                width: '100%',
                float: 'left'
            },
            listSuccess: {
                color: '#fff',
                fontSize: '16px',
                float: 'left',
                marginLeft: '5px',
                marginTop: '10px'
            },
            listSay: {
                color: '#fff',
                fontSize: '18px',
                width: '100%',
                textAlign: 'center',
                marginTop: '6px'
            },
            listSayFooter: {
                position: 'absolute',
                bottom: '0',
                height: '41px',
                backgroundColor: '#85A5D3',
                cursor: 'pointer',
                width: '100%',
                float: 'left'
            },
            holderTime: {
                float: 'right',
                fontSize: '14px',
                marginRight: '14px',
                marginTop: '12px',
                color: '#fff'
            },
            list: {
                float: 'left',
                height: '100%',
                width: '100%',
                position: 'relative'
            },
            pageFooter: {
                position: 'absolute',
                bottom: '38px',
                left: '3%'
            },
            saypageFooter: {
                position: 'absolute',
                bottom: '130px',
                left: '5%'
            },
            up: {
                background: '#FFFFFF',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                width: '174px',
                height: '43px',
                fontSize: '18px'
            },
            down: {
                background: '#FFFFFF',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                width: '174px',
                height: '43px',
                marginLeft: '10px',
                fontSize: '18px'
            },
            sayup: {
                background: '#FFFFFF',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                width: '96px',
                height: '36px',
                fontFamily: 'PingFangSC-Medium',
                fontSize: '16px',
                color: '#333333'
            },
            saydown: {
                background: '#FFFFFF',
                border: '1px solid #E1E1E1',
                borderRadius: '5px',
                width: '96px',
                height: '36px',
                marginLeft: '25px',
                fontFamily: 'PingFangSC-Medium',
                fontSize: '16px',
                color: '#333333'
            },
            rightPanel: {
                position: 'fixed',
                right: '0',
                height: '100%',
                width: '33.3%',
                border: '1px solid gray',
                backgroundColor: '#fff',
                animation: 'bounceInLeft 1s infinite cubic-bezier(0.215, 0.610, 0.355, 1.000)'
            },
            open: {
                background: '#FFFFFF',
                boxShadow: '-2px 2px 7px 0 rgba(0,0,0,0.30)',
                position: 'fixed',
                right: '0',
                width: '40px',
                height: '100px',
                borderBottomLeftRadius: '20px',
                cursor: 'pointer'
            },
            close: {
                background: '#FFFFFF',
                boxShadow: '-2px 2px 7px 0 rgba(0,0,0,0.30)',
                position: 'fixed',
                right: '33%',
                width: '40px',
                height: '100px',
                borderBottomLeftRadius: '20px',
                cursor: 'pointer'
            },
            openimg: {
                marginTop: '30px',
                marginLeft: '5px'
            },
            openHeader: {
                fontFamily: 'PingFangSC-Regular',
                backgroundColor: '#85A5D3',
                height: '39px',
                color: '#fff',
                fontSize: '18px',
                textAlign: 'center',
                paddingTop: '8px'
            },
            kitchType: {
                fontSize: '24px'
            },
            guaqi: {
                backgroundColor: '#383F4F',
                color: '#fff',
                borderRadius: '4px',
                widht: '51px',
                height: '31px',
                float: 'right',
                border: '0px solid #fff',
                marginTop: '3px',
                marginRight: '6px'
            }


        }
        const orderInfo = this.state.showKitchen;
        const waimaiInfo = this.state.waimaiInfo;
        const sayInfo = this.state.showSay;
        console.log(this.state.showKitchen);
        return (

            <div style={styles.content}>
                <div style={styles.left}>
                    <div style={styles.kitchType}>堂食订单</div>
                    <div style={styles.list}>
                        {
                            orderInfo.map((io, index) => {
                                return (
                                    <div style={styles.listleft}>
                                        {io.color == 'isGreen' ? <div style={styles.listheaderGreen}>
                                            <div style={styles.orderName}>{io.orderName}</div>
                                            <button style={styles.guaqi} onClick={() => this._guaqi(index)}>挂起</button>
                                        </div> : ''}
                                        {io.color == 'isRed' ? <div style={styles.listheaderRed}>
                                            <div style={styles.orderName}>{io.orderName}</div>
                                            <button style={styles.guaqi} onClick={() => this._guaqi(index)}>挂起</button>
                                        </div> : ''}
                                        {io.color == 'isYellow' ? <div style={styles.listheaderYellow}>
                                            <div style={styles.orderName}>{io.orderName}</div>
                                            <button style={styles.guaqi} onClick={() => this._guaqi(index)}>挂起</button>
                                        </div> : ''}

                                        <div
                                            style={io.goodsDetails.length > 6 ? styles.goodsLongList : styles.goodsList}>
                                            {
                                                io.goodsDetails.map(function (ko, index) {
                                                    return (
                                                        <Popconfirm placement="bottom"
                                                                    title={'你确定要挂起' + ko.goodName + '吗？'} okText="是的"
                                                                    cancelText="取消">
                                                            <div style={styles.goodRow}>
                                                                <div style={styles.goodsLeft}>{ko.goodName}</div>
                                                                <div
                                                                    style={styles.goodsRight}>{ko.count}{ko.unitType}</div>
                                                            </div>
                                                        </Popconfirm>


                                                    )
                                                })
                                            }
                                            {io.color == 'isGreen' ? <div style={styles.listFooterGreen} onClick={() => this._successly(index)}>
                                                <div style={styles.listSuccess}>完成配餐</div>
                                                <div style={styles.holderTime}>{io.endTime}</div>
                                            </div> : ''}
                                            {io.color == 'isRed' ? <div style={styles.listFooterRed} onClick={() => this._successly(index)}>
                                                <div style={styles.listSuccess}>完成配餐</div>
                                                <div style={styles.holderTime}>{io.endTime}</div>
                                            </div> : ''}
                                            {io.color == 'isYellow' ? <div style={styles.listFooterYellow} onClick={() => this._successly(index)}>
                                                <div style={styles.listSuccess}>完成配餐</div>
                                                <div style={styles.holderTime}>{io.endTime}</div>
                                            </div> : ''}

                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div style={styles.pageFooter}>
                            <button style={styles.up} onClick={this._kitchLast}>上一页</button>
                            <button style={styles.down} onClick={this._kitchNext}>下一页</button>
                        </div>
                    </div>

                </div>
                <div style={styles.right}>
                    <div style={styles.kitchType}>外卖订单</div>
                    <div style={styles.list}>
                        {
                            waimaiInfo.map(function (io, index) {
                                return (
                                    <div style={styles.waimaListLeft}>
                                        <div style={styles.listheader}>
                                            <div style={styles.orderName}>{io.orderName}</div>
                                        </div>
                                        <div
                                            style={io.goodsDetails.length > 6 ? styles.goodsLongList : styles.goodsList}>
                                            {
                                                io.goodsDetails.map(function (ko, index2) {
                                                    return (
                                                        <div style={styles.goodRow}>
                                                            <div style={styles.goodsLeft}>{ko.goodName}</div>
                                                            <div style={styles.goodsRight}>{ko.count}{ko.unitType}</div>
                                                        </div>

                                                    )
                                                })
                                            }
                                            <div style={styles.listFooter}>
                                                <div style={styles.listSuccess}>完成配餐</div>
                                                <div style={styles.holderTime}>20:59</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div style={styles.pageFooter}>
                            <button style={styles.up}>上一页</button>
                            <button style={styles.down}>下一页</button>
                        </div>
                    </div>
                </div>
                {/* <span style={styles.titleText}>历史订单</span> */}
                {/* <div style={styles.contentList}></div> */}
                {/* <div style={styles.buttonLayout}>
                    <text style={styles.buttonStyle}>返回厨显</text>
                    <text style={styles.buttonStyle}>上一页</text>
                    <text style={styles.buttonStyle}>下一页</text>
                </div> */}
                <div style={styles.open} onClick={this._open}><img style={styles.openimg}
                                                                   src={require("../../../pic/open.png")}/></div>
                <div className={this.state.isopen ? 'lastClose' : 'initClose'} onClick={this._close}><img
                    style={styles.openimg} src={require("../../../pic/close.png")}/></div>
                <div className={this.state.isopen ? 'rightPanel2' : 'rightPanel'}>
                    <div style={styles.openHeader}>挂起订单</div>
                    <div style={styles.list}>
                        {
                            sayInfo.map((io, index)=> {
                                return (
                                    <div style={styles.sayPanel}>
                                        <div style={styles.listheaderSay}>
                                            <div style={styles.orderName}>{io.orderName}</div>
                                        </div>
                                        <div style={styles.sayList}>
                                            {
                                                io.goodsDetails.map(function (ko, index2) {
                                                    return (
                                                        <div style={styles.goodRow}>
                                                            <div style={styles.goodsLeft}>{ko.goodName}</div>
                                                            <div style={styles.goodsRight}>{ko.count}{ko.unitType}</div>
                                                        </div>

                                                    )
                                                })
                                            }
                                            <div style={styles.listSayFooter} onClick={() => this._callUp(index)}>
                                                <div style={styles.listSay}>叫起</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div style={styles.saypageFooter}>
                            <button style={styles.sayup}>上一页</button>
                            <button style={styles.saydown} onClick={this._sayNext}>下一页</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomePage
