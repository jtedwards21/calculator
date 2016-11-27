import React from "react";
import ReactDOM from "react-dom";


//Change variables
var onChange = function(screen) {
　　ReactDOM.render(<Calculator screen={screen} />, document.getElementById("content"));
}

export default　class Calculator extends React.Component () {
  constructor() {
    super();

    this.state = {
    };

    this.screen = "";


  }
　　input(e){
    var char = e.target.id;
    var screen = this.props.screen;
    screen = screen + char;
    onChange(screen);
  }
  clear(e){
    var screen = "0";
    onChange(screen);
  }
  solve(){
    console.log('solve');
  }
  render(){
　　　　return(
　　　　　　<div className="calculator-container">
      <div className="button-row">
        <div className="output-cont">
          <span id="output">{this.props.screen}</span>
        </div>
      </div>
      <div className="button-row">
    　　　　<button id="AC" className="c-btn btn-lg btn btn-default" onClick={this.clear.bind(this)}>AC</button>
　　　　　　　　<button id="CE" className="c-btn btn-lg btn btn-default" onClick={this.clear.bind(this)}>CE</button>
　　　　　　　　<button className="c-btn val btn btn-lg btn-default" id="%">%</button>
　　　　　　　　<button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id="/">/</button>
  　　　　</div>
 

      <div className="button-row">
        <button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="7">7</button>
        <button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id="8">8</button>
        <button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id="9">9</button>
        <button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id="*">*</button>
      </div>

　　　　　　<div className="button-row">
	<button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="4">4</button>
	<button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="5">5</button>
	<button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="6">6</button>
	<button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="-">-</button>
      </div>

      <div className="button-row">
	<button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="1">1</button>
	<button className="c-btn val btn-lg btn btn-default" onClick={this.input.bind(this)} id="2">2</button>
	<button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id="3">3</button>
	<button className="c-btn val bt btn-lg btn-default" onClick={this.input.bind(this)} id="+">+</button>
      </div>

　　　　　 <div className="button-row">
    <button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id="0">0</button>
    <button className="c-btn val btn btn-lg btn-default" onClick={this.input.bind(this)} id=".">.</button>
    <button id="eq" className="c-btn btn btn-lg btn-default" onClick={this.solve.bind(this)} >=</button>
    <button id="N/A" className="c-btn btn-lg btn btn-default">N/A</button>
      </div>
      </div>
    )
  }
}
