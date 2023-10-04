// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstBtn: false,
    lastBtn: false,
    first: null,
    last: null,
    firstText: null,
    lastText: null,
  }

  showHideFirst = () => {
    const {first, last, firstBtn, lastBtn, firstText, lastText} = this.state
    if (firstBtn === false) {
      this.setState(prevState => ({
        firstBtn: true,
        first: 'firstClass',
        firstText: 'Joe',
      }))
    } else {
      this.setState(prevState => ({
        firstBtn: false,
        first: null,
        firstText: null,
      }))
    }
  }

  showHideLast = () => {
    const {first, last, firstBtn, lastBtn, firstText, lastText} = this.state
    if (lastBtn === false) {
      this.setState(prevState => ({
        lastBtn: true,
        last: 'firstClass',
        lastText: 'Jonas',
      }))
    } else {
      this.setState(prevState => ({
        lastBtn: false,
        last: null,
        lastText: null,
      }))
    }
  }

  render() {
    const {first, last, firstText, lastText} = this.state
    return (
      <div className="hide-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-card">
          <div className="first-card">
            <button type="button" className="btn" onClick={this.showHideFirst}>
              Show/Hide Firstname
            </button>
            <p className={first}>{firstText}</p>
          </div>
          <div className="first-card">
            <button type="button" className="btn" onClick={this.showHideLast}>
              Show/Hide Lastname
            </button>
            <p className={last}>{lastText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
