import '../styles/Header.css'
import NavBar from "./NavBar.jsx";
import star from '../../public/Icons/star.png';

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
                    top: '5.5rem',
                    opacity: '0.8'
                }}>
                    <h2 > Fans: </h2>
                    <p style={{translate: '0% -65%'}}> ∞ </p>
                </div>
            </div>
            <div className="NavBar">
                <NavBar></NavBar>
            </div>
        </div>
    )
}

export default Header