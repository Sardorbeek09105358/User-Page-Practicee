import "./Navbar.css"

function Navbar({userslength}) {
  return (
    <div className="navbar">
        <div className="navbar-container container">
            <h1 className="navbar-logo">the user</h1>
            <h3 className="navbar-counter">
                {userslength > 0 ? "you have: " + userslength : " not users:"}
            </h3>
        </div>
    </div>
  )
}

export default Navbar