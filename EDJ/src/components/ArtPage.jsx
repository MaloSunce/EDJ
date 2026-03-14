import '../styles/ArtPage.css';
import justice from '../../public/Images/Justice.png';
import temperance from '../../public/Images/Temperance.png';
import hierophant from '../../public/Images/The-Hierophant.png';
import twoOfCups from '../../public/Images/Two-of-Cups.png';
import tenOfCups from '../../public/Images/Ten-of-Cups.png';

function Art() {
    return (
        <div className="Art" id="Art">
            <h1>ART</h1>

            <div className="ArtContainer">
                <img src={justice} alt="Placeholder image of tarot card"/>
                <img src={temperance} alt="Placeholder image of tarot card" />
                <img src={hierophant} alt="Placeholder image of tarot card" />
                <img src={twoOfCups} alt="Placeholder image of tarot card" />
                <img src={tenOfCups} alt="Placeholder image of tarot card" />
            </div>
        </div>
    );
}

export default Art;