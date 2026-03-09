import '../styles/Header.css'
import NavBar from "./NavBar.jsx";

function Header() {
    return (
        <div className="Header" id="Header">
            <div className="Title">
                <h1>E</h1>
                <h2>VA</h2>
                <h1>DJ</h1>
            </div>
            <div className="NavBar">
                <NavBar></NavBar>
            </div>
        </div>
    )
}

export default Header