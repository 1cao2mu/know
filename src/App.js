import React, { Component } from 'react';
import './App.css';
import './css/flex.css';
import { Button, Row, Col, Radio, Input } from "antd";
const Search = Input.Search;
class App extends Component {

  state = {
    topList: [{ name: "首页", isSelect: true }
      , { name: "项目检索" }
      , { name: "成果检索" }
      , { name: "标准评价" }
      , { name: "科技评估" }
      , { name: "项目咨询" }
      , { name: "奖励咨询" }
      , { name: "成果交易" }
      , { name: "联系我们" }
      , { name: "登录" }],
    mainList1: [{ name: "首页", isSelect: true }
      , { name: "项目检索" }
      , { name: "成果检索" }
      , { name: "成果检索" }
    ],
    mainList2: [{ name: "首页", isSelect: true }
      , { name: "项目检索" }
      , { name: "成果检索" }
      , { name: "成果检索" }
    ],

  }


  render() {
    return (
      <div className="App">
        <div className="top">欢迎来到知耕科技服务平台！</div>
        <Row type='flex' align='middle' >
          <Col span={10} offset={2}>
            <img src={require("./img/logo.png")} />
          </Col>
          <Col span={7}>
            <img src={require("./img/lx.png")} />
          </Col>
          <Col span={2}>
            <Button type="primary" >登录</Button>
          </Col>
          <Col span={3}>
            <Button >注册</Button>
          </Col>
        </Row>

        <div className="nav">
          <ul>
            {this.state.topList.map((data, index) => (
              <li key={index} className={data.isSelect ? "tabactive" : ""}  >{data.name}</li>
            ))}
          </ul>
        </div>


        <Row className="search" type='flex' align='middle' justify='center' >

          <Col span={15} offset={0}>

            <div className='search_left'>
              <Radio.Group defaultValue="a" size="large" buttonStyle="solid">
                <Radio.Button value="a">项目搜索</Radio.Button>
                <Radio.Button value="b">成果搜索</Radio.Button>
              </Radio.Group>
            </div>

            <div className="search_l_b">
              <Search
                placeholder="请输入您要检索的内容"
                enterButton="检索"
                size="large"
                onSearch={value => console.log(value)}
              />
            </div>
          </Col>
          <Col span={6} offset={1}>
            <div>
              <Button type="primary" style={{ height: 40, marginTop: 60 }} >高级检索</Button>
            </div>
          </Col>
        </Row>



        <div className="main-j">
          <div className="main-j-top am-flexbox-justify-center">
            <img src={require("./img/PlatformProfile.png")} />
          </div>

          <div className="main-j-footer am-flexbox-dir-row" style={{}}>
            {this.state.mainList1.map((data, index) => (
              <div key={index} className="main1item am-flexbox-dir-column" style={{ margin: 15 }}>
                <img src={require('./img/reward.png')} />
                <div style={{fontSize:24,marginTop:22,marginLeft:28}}>联系我们</div>
                <div style={{fontSize:15,marginTop:22,marginLeft:28}}>我们竭诚为您服务，帮您排忧解难，偶们的服务电话是0371-1234567,服务邮箱是hnzg@163.com。欢迎您的来电。</div>
                <div style={{fontSize:13,color:"#0d496e"}}>了解更多</div>
              </div>
            ))}
          </div>

        </div>


        <div className="main-f">
          <div className="main-f-top am-flexbox-justify-center">
            <img src={require("./img/serve.png")} />
          </div>

          <div className="main-f-f">
            <ul className="item1">


              <li style={{ marginLeft: 35 }}>
                <img src={require("./img/1.png")} className="item1img" />
                <div className="item1-div"></div>
                <div className="div">
                  <h3 className="item1-h3">科技检索</h3>
                  <p>为您提供快捷检索，方便，简单，安全，效率是我们的理念。</p>
                </div>
              </li>


              <li style={{ marginLeft: 35 }} >
                <img src={require("./img/2.png")} className="item1img" />
                <div className="item1-div"></div>
                <div className="div">
                  <h3 className="item1-h3">标准评价</h3>
                  <p>标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价</p>
                </div>
              </li>

              <li style={{ marginLeft: 35 }} >
                <img src={require("./img/3.png")} className="item1img" />
                <div className="item1-div"></div>
                <div className="div">
                  <h3 className="item1-h3">科技评估</h3>
                  <p>科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估</p>
                </div>
              </li>
              <li style={{ marginLeft: 35 }} >
                <img src={require("./img/4.png")} className="item1img" />
                <div className="item1-div"></div>
                <div className="div">
                  <h3 className="item1-h3">奖励咨询</h3>
                  <p>奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer">
          <div className="footer-top">
            <div className="footer-a" >
              <a href="#">首页</a> |
			<a href="#">关于我们</a> |
			<a href="#">联系我们</a> |
			<a href="#">网站地图</a> |
			<a href="#">产品与服务</a><br />
              电话:0371-1234567  服务信箱:123456789.com<br />
              xxxxxxxxxxxxxxxxx Copyright 2018 NoiseChina.com Inc All Rights Reserved.
			</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
