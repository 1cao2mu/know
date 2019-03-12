import React, { Component } from 'react';
import './App.css';
import './css/flex.css';
import { Button, Row, Col, Radio, Input, Form } from "antd";
const Search = Input.Search;
const FormItem = Form.Item;
class App extends Component {

  state = {
    search_content: "",
    topList: [{ name: "首页", isSelect: true, url: " " }
      , { name: "项目检索", url: "http://125.46.34.231:8000/projectSearch/index" }
      , { name: "成果检索", url: " " }
      , { name: "标准评价", url: " " }
      , { name: "科技评估", url: " " }
      , { name: "项目咨询", url: " " }
      , { name: "奖励咨询", url: " " }
      , { name: "成果交易", url: " " }
      , { name: "联系我们", url: " " }
      , { name: "登录" }],
    mainList1: [{ name: "ABOUT</br>知耕科技服务平台", isSelect: true, content: "&nbsp&nbsp&nbsp&nbsp知耕科技服务平台是一个面向众人的科技服务平台，致力于为您提供关于科技项目的服务于检索。</br>&nbsp&nbsp&nbsp&nbsp我们能为您定制公平价格，为您提供快速的查询平台，鼓励创新，创造发展。" }
      , { name: "奖励咨询", content: "		&nbsp&nbsp&nbsp&nbsp只有你想不到，没有我们做不到，为了鼓励科研创新精神我们制作了一系列的奖励资讯。</br>&nbsp&nbsp&nbsp&nbsp该资讯能激励你争创佳绩，你的努力，就是我们的动力。", isMove: false }
      , { name: "成果交易", content: "&nbsp&nbsp&nbsp&nbsp还在为交易骗局而拒绝交易吗？还在为诚信而担忧吗?一次合作终身信赖，我们致力于诚信服务，信字贯穿我们的整个行业理念，相信我们的公平，诚信。您将受益匪浅。 				" }
      , { name: "联系我们", content: "&nbsp&nbsp&nbsp&nbsp我们竭诚为您服务，帮您排忧解难，偶们的服务电话是0371-1234567</br>，服务邮箱是hnzg@163.com。欢迎您的来电。" }
    ],
    mainList2: [{ name: "科技检索", content: "为您提供快捷检索，方便，简单，安全，效率是我们的理念。", isSelect: true }
      , { name: "项目检索", content: "标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价标准评价", }
      , { name: "科技评估", content: "科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估科技评估", }
      , { name: "奖励咨询", content: "奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询奖励咨询", }
    ],
  }

  render() {
    let search_content = this.state.search_content;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App am-flexbox-dir-column am-flexbox-align-center ">
        <div className="top">欢迎来到知耕科技服务平台！</div>
        <Row className="top2" type='flex' align='middle' >
          <Col span={10} offset={2}>
            <img alt="alt" src={require("./img/logo.png")} />
          </Col>
          <Col span={7}>
            <div>
              <img alt="alt" src={require("./img/top_tel.png")} />
              <img alt="alt" src={require("./img/top_mail.png")} />
              <div className='am-flexbox-dir-row'>


              </div>
            </div>
          </Col>
          <Col span={5}>
            <Button type="primary" >登录</Button>
            <Button style={{ marginLeft: 20 }} >注册</Button>
          </Col>
        </Row>

        <div className="nav">
          <ul>
            {this.state.topList.map((data, index) => (
              <li key={index} className={data.isSelect ? "tabactive" : ""}  >
                <a href={data.url}> {data.name} </a>
              </li>
            ))}
          </ul>
        </div>

        <Row className="search" type='flex' align='middle' justify='center' >

          <Col span={15} offset={0}>

            <div className='search_left'>
              <Radio.Group onChange={(event) => { console.log(event); }} defaultValue="a" size="large" buttonStyle="solid">
                <Radio.Button value="a">项目搜索</Radio.Button>
                <Radio.Button value="b">成果搜索</Radio.Button>
              </Radio.Group>
            </div>
            <div className="search_l_b">
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input placeholder="Username" />
                  )}
                </FormItem>
              </Form>
            </div>
          </Col>
          <Col span={7} offset={0}>
            <div style={{ marginLeft: 15 }} >
              <a href={`http://218.206.229.46:8080/projectSearch/index?text=${search_content}`}>
                <Button type="primary" style={{ height: 40, marginTop: 60 }} >高级检索</Button>
              </a>
            </div>
          </Col>
        </Row>

        <div className="main-1">
          <div className="main-1-top am-flexbox-justify-center">
            <img alt="alt" src={require("./img/PlatformProfile.png")} />
          </div>

          <div className="main-1-footer am-flexbox-dir-row">
            {this.state.mainList1.map((data, index) => {
              let bool = data.isMove || data.isSelect;
              let className1 = bool ? "main1items" : '';
              return <div key={index} className={`main1item am-flexbox-dir-column ${className1}`} onMouseEnter={() => this.onMouse1(index, true)} onMouseLeave={() => this.onMouse1(index, false)} onClick={() => this.onDown1(index)} >
                <img alt="alt" src={require(`./img/1${index}.png`)} style={{ height: bool ? 0 : 90 }} />
                <div dangerouslySetInnerHTML={{ __html: data.name }} style={{ fontSize: 24, paddingTop: 20, paddingLeft: 20, paddingRight: 10 }}></div>
                <div dangerouslySetInnerHTML={{ __html: data.content }} style={{ fontSize: 15, paddingTop: 20, paddingLeft: 20, paddingRight: 10, height: bool ? 320 : 210 }}></div>
                <div className='am-flexbox-align-end'>
                  <div style={{ fontSize: 15, color: "#0d496e", textAlign: "end", width: 230 }}>了解更多</div>
                </div>
              </div>
            }
            )}
          </div>
        </div>

        <div className="main-f">
          <div className="main-f-top am-flexbox-justify-center">
            <img alt="alt" src={require("./img/serve.png")} />
          </div>
          <div className="main-f-f">
            <ul className="item1">
              {this.state.mainList2.map((data, index) => (
                <li key={index} onMouseEnter={() => this.onMouse2(index, true)} onMouseLeave={() => this.onMouse2(index, false)} style={{ marginLeft: index === "0" ? 0 : 35 }}>
                  <img alt="alt" src={require(`./img/2${index}.png`)} width="265" height="370" />
                  <div className="item1-div" style={{
                    width: 265,
                    height: data.isMove ? 370 : 50,
                    top: data.isMove ? 0 : 320,
                  }}></div>
                  <div className="div" style={{
                    width: 265,
                    height: data.isMove ? 370 : 50,
                    top: data.isMove ? 0 : 320,
                  }} >
                    <h3 className="item1-h3" style={{ color: "#fff" }}>{data.name}</h3>
                    <p style={{ color: "#fff" }}>{data.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer">
          <div className="footer-top">
            <div className="footer-a" style={{ color: "#fff" }} >
              <a href=''> 首页 </a> | 关于我们 | 联系我们 | 网站地图 | 产品与服务<br />
              电话:0371-1234567  服务信箱:123456789.com<br />
              xxxxxxxxxxxxxxxxx Copyright 2018 www.zhigengwang.com.cn Inc All Rights Reserved.
            </div>
          </div>
        </div>

      </div >
    );
  }


  onMouse1(index, bool) {
    let mainList1 = this.state.mainList1;
    mainList1[index].isMove = bool;
    this.setState(mainList1);
  }

  onMouse2(index, bool) {
    let mainList2 = this.state.mainList2;
    mainList2[index].isMove = bool;
    this.setState(mainList2);
  }
  onDown1(index) {
    let mainList1 = this.state.mainList1;
    for (let i = 0; i < mainList1.length; i++) {
      const element = mainList1[i];
      element.isSelect = i === index;
    }
    this.setState(mainList1);
  }


}
const FormApp = Form.create()(App);
export default FormApp;
