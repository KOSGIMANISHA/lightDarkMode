// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevStart => ({isDarkMode: !prevStart.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const newLocal = 'light-mode'
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className="heading">click To change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
