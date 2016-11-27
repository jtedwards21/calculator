import React from "react";
import ReactDOM from "react-dom";

var onChange = function(screen) {
　　ReactDOM.render(<Calculator screen={screen} />, document.getElementById("content"));
}

export default　class Calculator extends React.Component {
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
　　　　　　<div className="calculator">
      <div className="button-row">
        <div className="output-container">
          <div id="output">{this.props.screen}</div>
        </div>
      </div>
      <div  id="row-one" className="btn-group">
    　　　　<button id="AC" className="btn-lg btn btn-default" onClick={this.clear.bind(this)}>AC</button>
　　　　　　　　<button id="CE" className="btn-lg btn btn-default" onClick={this.clear.bind(this)}>CE</button>
    　　　　<button id="eq" className="round btn btn-lg btn-default" onClick={this.solve.bind(this)} >=</button>
　　　　　　　　<button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="/">/</button>
  　　　　</div>
 

      <div className="btn-group">
        <button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="7">7</button>
        <button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="8">8</button>
        <button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="9">9</button>
        <button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="*">*</button>
      </div>

　　　　　　<div id="row-three" className="btn-group">
	<button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="4">4</button>
	<button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="5">5</button>
	<button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="6">6</button>
	<button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="-">-</button>
      </div>

      <div className="btn-group">
	<button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="1">1</button>
	<button className="round btn-lg btn btn-default" onClick={this.input.bind(this)} id="2">2</button>
	<button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="3">3</button>
	<button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="+">+</button>
      </div>

　　　　　 <div className="btn-group">
    <button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id="0">0</button>
    <button className="round btn btn-lg btn-default" onClick={this.input.bind(this)} id=".">.</button>
    <button id="N/A" className="btn-lg btn btn-default">N/A</button>
      </div>
      </div>
    )
  }
}
