import React from "react";
import ReactDOM from "react-dom";


//Change variables
var onChange = function() {
　　ReactDOM.render(<Calculator />, document.getElementById("content"));
}

export default　class Calculator extends React.Component () {
  constructor() {
    super();

    this.state = {
      
    };


  }
  render(){
    //Can't Write Class
　　　　return(
      <div class="button-row">
        <div class="output-cont">
          <span id="output">0</span>
        </div>
      </div>
      <div class="button-row">
    　　　　<button id="AC" class="c-btn btn-lg btn btn-default">AC</button>
　　　　　　　　<button id="CE" class="c-btn btn-lg btn btn-default">CE</button>
　　　　　　　　<button class="c-btn val btn btn-lg btn-default" id="%">%</button>
　　　　　　　　<button class="c-btn val btn btn-lg btn-default" id="/">/</button>
  　　　　</div>
 

      <div class="button-row">
        <button class="c-btn val btn-lg btn btn-default" id="7">7</button>
        <button class="c-btn val btn btn-lg btn-default" id="8">8</button>
        <button class="c-btn val btn btn-lg btn-default" id="9">9</button>
        <button class="c-btn val btn btn-lg btn-default" id="*">*</button>
      </div>

　　　　　　<div class="button-row">
	<button class="c-btn val btn-lg btn btn-default" id="4">4</button>
	<button class="c-btn val btn-lg btn btn-default" id="5">5</button>
	<button class="c-btn val btn-lg btn btn-default" id="6">6</button>
	<button class="c-btn val btn-lg btn btn-default" id="-">-</button>
      </div>

      <div class="button-row">
	<button class="c-btn val btn-lg btn btn-default" id="1">1</button>
	<button class="c-btn val btn-lg btn btn-default" id="2">2</button>
	<button class="c-btn val btn btn-lg btn-default" id="3">3</button>
	<button class="c-btn val bt btn-lg btn-default" id="+">+</button>
      </div>


<div class="row">
  <div class="col-xs-3">
    <button class="c-btn val btn btn-lg btn-default" id="0">0</button>
  </div>
  <div class="col-xs-3">
    <button class="c-btn val btn btn-lg btn-default" id=".">.</button>
  </div>
  <div class="col-xs-3">
    <button id="eq" class="c-btn btn btn-lg btn-default">=</button>
  </div>
  <div class="col-xs-3">
    <button id="N/A" class="c-btn btn-lg btn btn-default">N/A</button>
  </div>
</div>
    )
  }
}
