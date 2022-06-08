import './index.css'

const PasswordsLists = props => {
  const {passwordDetails, deletePassword, isCheckBoxClicked} = props
  const {id, web, name, password, initialClassName} = passwordDetails
  const initial = name ? name[0].toUpperCase() : ''
  const stars =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  const onDeletePassword = () => {
    deletePassword(id)
  }

  return (
    <li className="list-items">
      <div className="extra">
        <div className="details-container">
          <div className={initialClassName}>
            <div className="profile-logo">{initial}</div>
          </div>
          <div className="web-name-password-container">
            <p className="web-text">{web}</p>
            <p className="user-text">{name}</p>
            {isCheckBoxClicked && password.length !== 0 ? (
              <img src={stars} alt="stars" className="stars" />
            ) : (
              <p className="password-text">{password}</p>
            )}
          </div>
        </div>
        <div className="button-container">
          <button className="delete-button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-button-img"
              onClick={onDeletePassword}
              testid="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordsLists
