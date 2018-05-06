import React, { Component } from "react"
import {Link} from "react-router-dom"
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: []
    }
  }
  add(){
    if($('.result').val()!= ''){
      var getitem = JSON.parse($('.result').val())
      console.log(getitem)
      for(var i=0;i<getitem.length;i++){
        this.state.list.push(getitem[i])
        this.setState({
          list: this.state.list
        })
      }
    }  
  } 
  clear(){
    this.setState({
      list: []
    })
  }
  render(){
    if($('.result').val()!= ''){
      $.ajax({
          type: 'GET',
          url: 'https://raw.githubusercontent.com/piedasing/json_test/master/json/document.json',
          success: function(data){
            var result = data
            console.log(result)
            $('.result').val(result)
          }
        })
    }
    let DOM = this.state.list.map((item, index) => (
      <div key={index} className="col-12 col-md-3 ol_room">
        <div className="room_container">
          <div className="cover" style={{backgroundImage: `url('${item.cover}')`}}>
            <h3>{item.name}</h3>
          </div>
          <div className="info">
            <h5>{item.eng}
              <div className="icons">
                <span>
                  <i className="fa.fa-coffee" />
                </span>
                <span>
                  <i className="fa.fa-bath" />
                </span>
                <span>
                  <i className="fa.fa-wifi" />
                </span>
              </div>
            </h5>
            <h5>{item.discount} 折</h5>
            <h4>TWD
              <s>{item.price}</s>
              <div className="final_price">{item.price * item.discount}</div> 
            </h4>     
          </div>
        </div> 
      </div>
    ))

    return (
      <div id="practice">
        <h1>房間資料</h1>
        <input className="result" value="" onChange={this.add.bind(this)} />
        <button className="btn btn-primary" onClick={this.add.bind(this)}>載入</button>
        <button className="btn btn-primary" onClick={this.clear.bind(this)}>清空</button>
        <Link to="/main" className="btn btn-primary">返回</Link>
        <div className="row">
          {DOM}
        </div>    
      </div>
    )
  }
}