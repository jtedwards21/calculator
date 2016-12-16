import React from "react";


export default　class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
　　　　　　screen: "0"
    };



  }
　　input(e){
    var char = e.target.id;
    var screen = this.state.screen;
    screen = screen + char;
　　　　if(screen.length > 1 && screen[0] == "0"){
	if(screen[1] !== "."){screen = screen.substring(1);}
    }
    this.setState({screen: screen});
  }
  clear(e){
    this.setState({screen: "0"});
  }
  solve(){
    console.log('solve');
    var e = eval(this.state.screen);
    //Solve equations for three parts
    this.setState({screen: e});
  }
  render(){
　　　　return(
　　　　　　<div className="calculator">
      <div className="button-row">
        <div className="top-container">
          <div id="top"></div>
        </div>
      </div>
      <div className="output">{this.state.screen}</div>
      <div  id="row-one" className="btn-group">
    　　　　<button id="AC" className="btn-lg btn blue-btn" onClick={this.clear.bind(this)}>AC</button>
　　　　　　　　<button id="CE" className="btn-lg btn blue-btn" onClick={this.clear.bind(this)}>CE</button>
    　　　　<button id="eq" className="round btn btn-lg blue-btn" onClick={this.solve.bind(this)} >=</button>
　　　　　　　　<button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="/">/</button>
  　　　　</div>
 

      <div className="btn-group">
        <button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="7">7</button>
        <button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="8">8</button>
        <button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="9">9</button>
        <button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="*">*</button>
      </div>

　　　　　　<div id="row-three" className="btn-group">
	<button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="4">4</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="5">5</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="6">6</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="-">-</button>
      </div>

      <div className="btn-group">
	<button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="1">1</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input.bind(this)} id="2">2</button>
	<button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="3">3</button>
	<button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="+">+</button>
      </div>

　　　　　 <div className="btn-group">
    <button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id="0">0</button>
    <button className="round btn btn-lg blue-btn" onClick={this.input.bind(this)} id=".">.</button>
    <button id="N/A" className="btn-lg btn blue-btn">N/A</button>
      </div>
      </div>
    )
  }
}
