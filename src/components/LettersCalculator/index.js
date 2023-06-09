// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countChar = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h3>Calculate the Letters you enter</h3>
          <label htmlFor="userInput">Enter the phrase</label>
          <input
            id="userInput"
            type="text"
            onChange={this.countChar}
            placeholder="Enter the phrase"
          />
          <p className="result">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
