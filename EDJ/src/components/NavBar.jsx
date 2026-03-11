import '../styles/NavBar.css'

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="NavItem3">
                <a href="#">ART</a>
            </div>
            <div className="NavItem2">
                <a href="#Music">MUSIC</a>
            </div>
            <div className="NavItem1">
                <a href="#">LIFE</a>
            </div>
            <div className="NavItem2">
                <a href="#Music">WRITING</a>
            </div>
            <div className="NavItem3">
                <a href="#">SHOP</a>
            </div>
        </nav>
    );
}

export default NavBar;