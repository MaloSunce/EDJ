import '../styles/Header.css'
import NavBar from "./NavBar.jsx";
import cd2 from '../../public/Images/cd2.png'

function Header() {
    return (
        <div className="Header" id="Header">
            <div style={{
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center',
            }}>
                <h1 className="Title">EVADJ</h1>
                <h2>∞ fans</h2>
            </div>

            <img className="CompactDiskimg" src={cd2} alt="Compact disc background image" />;

            <div className="Nav">
                <NavBar></NavBar>
            </div>
        </div>
    )
}

export default Header