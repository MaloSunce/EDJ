import '../styles/Header.css'
import NavBar from "./NavBar.jsx";

function Header() {
    return (
        <div className="Header" id="Header">
            <h1 className="Title">EVADJ</h1>
            <div className="NavBar">
                <NavBar></NavBar>
            </div>
        </div>
    )
}

export default Header