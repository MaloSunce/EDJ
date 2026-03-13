import '../styles/NavBar.css'

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="NavContainer">
                <a href="#Music">MUSIC</a>
                <a href="#">ART</a>
                <a href="#">LIFE</a>
                <a href="#Music">SHOP</a>
            </div>
        </nav>
    );
}

export default NavBar;