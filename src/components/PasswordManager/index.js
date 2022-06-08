import {Component} from 'react'

import './index.css'

class PasswordManager extends Component {
  onChangeWebName = event => {
    console.log(event.target.value)
  }

  onChangeUserName = event => {
    console.log(event.target.value)
  }

  onChangePassword = event => {
    console.log(event.target.value)
  }

  onGettingUsersInputs = event => {
    console.log('is clicked')
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
        </div>
        <div className="extra-container">
          <div className="content-container">
            <div className="users-input-container">
              <div className="login-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
                  alt="password manager"
                  className="login-page-image"
                />
              </div>
              <form className="form">
                <div className="form-container">
                  <p className="description">Add New Password </p>
                  <div className="users-inputs-forms-container">
                    <div className="each-input">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                        alt="website"
                        className="logo"
                      />
                      <input
                        className="input-box"
                        type="text"
                        placeholder="Enter Website"
                        onChange={this.onChangeWebName}
                      />
                    </div>
                    <div className="each-input">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                        alt="username"
                        className="logo"
                      />
                      <input
                        className="input-box"
                        type="text"
                        placeholder="Enter Username"
                        onChange={this.onChangeUserName}
                      />
                    </div>
                    <div className="each-input">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                        alt="password"
                        className="logo"
                      />
                      <input
                        className="input-box"
                        type="password"
                        placeholder="Enter Password"
                        onChange={this.onChangePassword}
                      />
                    </div>
                  </div>
                  <div className="button-container">
                    <button
                      className="add-button"
                      type="submit"
                      onClick={this.onGettingUsersInputs}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="password-container">
            <div className="password-search-container">
              <div className="password-text-and-count">
                <p className="your-password">Your Password</p>
                <p className="password-count">0</p>
              </div>
              <div className="search-bar-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  type="search"
                  className="search-bar"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="check-box-container">
              <input type="checkbox" className="check-box" id="checkboxId" />
              <label htmlFor="checkboxId" className="label-text">
                Shows Passwords
              </label>
            </div>
            <div className="login-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="password manager"
                className="login-page-image"
              />
            </div>
            <p className="no-password-text">No Passwords</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
