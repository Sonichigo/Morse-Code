import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import morseCodes from './morseCodes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      output: ""
    }
  }

  convertToMorse(input){
    let output = ""
    let morseArray = input.split("")
    for(let i = 0; i < morseArray.length; i++){
      if(morseArray[i].toUpperCase() == " "){
        output += "\xa0\xa0"
      }
      else {
        output += morseCodes[morseArray[i].toUpperCase()]
      }
    }
    this.setState({output, input})
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Morse Code Translator</h1>
            <input className="form-control"
                   onChange={(e)=>this.convertToMorse(e.target.value)}/>
            <h3>original: {this.state.input}</h3>
            <h3>morse: {this.state.output}</h3>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))