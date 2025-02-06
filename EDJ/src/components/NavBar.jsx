import '../styles/NavBar.css'

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="NavItem">
                <a href="#Music">MUSIC</a>
            </div>
            <div className="NavItem">
                <a href="#">ART</a>
            </div>
            <div className="NavItem">
                <a href="#">LIFE</a>
            </div>
            <div className="NavItem">
                <a href="#">SHOP</a>
            </div>
        </nav>
    );
}

export default NavBar;