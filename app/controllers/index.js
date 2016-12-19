var Calculator = React.createClass({
  getInitialState() {
    return {
　　　　　　screen: "0"
    };



  },
　　input(e){
    var char = e.target.id;
    var screen = this.state.screen;
    screen = screen + char;
　　　　if(screen.length > 1 && screen[0] == "0"){
	if(screen[1] !== "."){screen = screen.substring(1);}
    }
    this.setState({screen: screen});
  },
  clear(e){
    this.setState({screen: "0"});
  },
  solve(){
    console.log('solve');
    var e = eval(this.state.screen);
    //Solve equations for three parts
    this.setState({screen: e});
  },
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
    　　　　<button id="AC" className="btn-lg btn blue-btn" onClick={this.clear}>AC</button>
　　　　　　　　<button id="CE" className="btn-lg btn blue-btn" onClick={this.clear}>CE</button>
    　　　　<button id="eq" className="round btn btn-lg blue-btn" onClick={this.solve} >=</button>
　　　　　　　　<button className="round btn btn-lg blue-btn" onClick={this.input} id="/">/</button>
  　　　　</div>
 

      <div className="btn-group">
        <button className="round btn-lg btn blue-btn" onClick={this.input} id="7">7</button>
        <button className="round btn btn-lg blue-btn" onClick={this.input} id="8">8</button>
        <button className="round btn btn-lg blue-btn" onClick={this.input} id="9">9</button>
        <button className="round btn btn-lg blue-btn" onClick={this.input} id="*">*</button>
      </div>

　　　　　　<div id="row-three" className="btn-group">
	<button className="round btn-lg btn blue-btn" onClick={this.input} id="4">4</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input} id="5">5</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input} id="6">6</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input} id="-">-</button>
      </div>

      <div className="btn-group">
	<button className="round btn-lg btn blue-btn" onClick={this.input} id="1">1</button>
	<button className="round btn-lg btn blue-btn" onClick={this.input} id="2">2</button>
	<button className="round btn btn-lg blue-btn" onClick={this.input} id="3">3</button>
	<button className="round btn btn-lg blue-btn" onClick={this.input} id="+">+</button>
      </div>

　　　　　 <div className="btn-group">
    <button className="round btn btn-lg blue-btn" onClick={this.input} id="0">0</button>
    <button className="round btn btn-lg blue-btn" onClick={this.input} id=".">.</button>
    <button id="N/A" className="btn-lg btn blue-btn">N/A</button>
      </div>
      </div>
    )
  }
})


ReactDOM.render(
  <Calculator  />,
  document.getElementById('container')
)
