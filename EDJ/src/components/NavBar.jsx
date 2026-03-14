import '../styles/NavBar.css'

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="NavContainer">
                <a href="#Music">MUSIC</a>
                <a href="#Art">ART</a>
                <a href="#Music">LIFE</a>
                <a href="#Music">SHOP</a>
            </div>
        </nav>
    );
}

export default NavBar;