import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      memOne: 0,
      memTwo: 0,
      result: "",
      arrayNum: []
    };  
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.handlememOneChange = this.handlememOneChange.bind(this);
    this.handlememTwoChange = this.handlememTwoChange.bind(this);

    this.number = this.number.bind(this);
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.equal = this.equal.bind(this);
    this.clear = this.clear.bind(this);

  }

  number(num) {
     // does not guarantee a new state
     //this.setState({
     //  result: `${this.state.result}${num}`
     //});

    // guarantees a new state
    this.setState(({ result }) => ({
      result: `${result}${num}`,
      arrayNum: [...this.state.arrayNum, num]
    }));
  }



  add() {
    let sum = this.state.memOne + this.state.memTwo;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (this.state.arrayNum.includes('+') === false) {
      this.setState ({
        result: sum,
        arrayNum: [...this.state.arrayNum, '+']
      });
    } 
    if (this.state.arrayNum.includes('+') === true) {
      let plusIndex = this.state.arrayNum.indexOf('+');
      let arrOfNum = this.state.arrayNum;
      let num1 = arrOfNum.slice(0, plusIndex);
      let num2 = arrOfNum.slice(plusIndex + 1);
      num1 = num1.reduce(reducer);
      num2 = num2.reduce(reducer);
      let total = num1 + num2;
      console.log(arrOfNum);
      console.log(num1);
      console.log(num2);
      console.log(total);
      this.state.arrayNum.reduce(reducer);
      this.setState ({
        result: sum,
        arrayNum: total
      });
    } 
  }

  substract() {
    let diff = this.state.memOne - this.state.memTwo
    this.setState ({
      result: diff
    });
  }

  multiply() {
    let product = this.state.memOne * this.state.memTwo
    this.setState ({
      result: product
    });
  }

  divide() {
    let quotient = this.state.memOne / this.state.memTwo
    this.setState ({
      result: quotient
    });
  }

  equal () {
    
    this.setState ({
      result: 0
    });
    
  }

  clear () {
    this.setState({
      memOne: "",
      memTwo: "",
      result: "",
      arrayNum: []
    })
  }

  handlememOneChange (event) {
    this.setState({
      memOne: Number(event.target.value)
    });
  }

  handlememTwoChange (event) {
    this.setState({
      memTwo: Number(event.target.value)
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }
  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Calculator +</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <div>
          <h1>Calculator</h1>
              Input 1:
              <input type="number" onChange={this.handlememOneChange} />
              <br></br>
              Input 2:
              <input type="number" onChange={this.handlememTwoChange} />
              <br></br>
              What operation do you want to do?
              <br></br>
              <button className="add" onClick={this.add}>+</button>
              <button className="substract" onClick={this.substract}>-</button>
              <button className="multiply" onClick={this.multiply}>*</button>
              <button className="divide" onClick={this.divide}>/</button>
              <br></br>
              Results:
              <input type="text" value={this.state.result} readOnly />
              <br></br>
              <br></br>
              <button className="one" onClick={() => this.number(1)}>1</button>
              <button className="two" onClick={() => this.number(2)}>2</button>
              <button className="three" onClick={this.one}>3</button>
              <button className="four" onClick={this.one}>4</button>
              <button className="five" onClick={this.one}>5</button>
              <button className="six" onClick={this.one}>6</button>
              <button className="seven" onClick={this.one}>7</button>
              <button className="eight" onClick={this.one}>8</button>
              <button className="nine" onClick={this.one}>9</button>

              
              <button className="equal" onClick={this.equal}>=</button>
              <button className="clear" onClick={this.clear}>clear</button>
            <h1>Results: {this.state.result}</h1>
            <h1>arrayNum: {this.state.arrayNum}</h1>

          <hr/>
          <div>
            <h1>Counter</h1>
              <button className='inc' onClick={this.increment}>Increment!</button>
              <button className='dec' onClick={this.decrement}>Decrement!</button>
              <button className='reset' onClick={this.reset}>Reset</button>
            <h1>Current Count: {this.state.count}</h1>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
