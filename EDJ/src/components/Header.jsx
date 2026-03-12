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
                <div style={{
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    top: '5.6rem',
                    opacity: '0.8'
                }}>
                    <h2 > Fans: </h2>
                    <p style={{translate: '0% -65%'}}> ∞ </p>
                </div>
            </div>

            <img className="CompactDiskimg" src={cd2} alt="Compact disc background image" />;

            <div className="Nav">
                <NavBar></NavBar>
            </div>
        </div>
    )
}

export default Header