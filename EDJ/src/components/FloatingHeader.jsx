import '../styles/FloatingHeader.css'
import NavBar from "./NavBar.jsx";

import {
    RiFacebookCircleLine, RiInstagramLine,
    RiSoundcloudLine, RiYoutubeLine
} from "react-icons/ri";
import { AiOutlineSpotify } from "react-icons/ai";
import star from '../../public/Icons/star.png';

function FloatingHeader() {
    return (
        <div className="FloatingHeader">

            <div className="StarIcon">
                {/*Icons made by <a href="https://www.flaticon.com/authors/gowi" title="GOWI"> GOWI </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>*/}
                <a href="#"><img src={star} alt="Back to top" /></a>
            </div>

            <div className="Pages">
                <a href="#Music">MUSIC</a>
                <a href="#Art">ART</a>
                <a href="#Music">LIFE</a>
                <a href="#Music">SHOP</a>
            </div>

            <div className="SocialMediaIcons">
                <a href="https://www.youtube.com" target="_blank">
                    <RiYoutubeLine className="HeaderIcon">
                        <span className="HiddenText">Link to YouTube</span></RiYoutubeLine>
                </a>
                <a href="https://open.spotify.com" target="_blank">
                    <AiOutlineSpotify className="HeaderIcon">
                        <span className="HiddenText">Link to Spotify</span></AiOutlineSpotify>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <RiInstagramLine className="HeaderIcon">
                        <span className="HiddenText">Link to Instagram</span></RiInstagramLine>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <RiFacebookCircleLine className="HeaderIcon">
                        <span className="HiddenText">Link to FaceBook</span></RiFacebookCircleLine>
                </a>
                <a href="https://soundcloud.com" target="_blank">
                    <RiSoundcloudLine className="HeaderIcon">
                        <span className="HiddenText">Link to SoundCloud</span></RiSoundcloudLine>
                </a>
                <div style={{ width: '0.1rem' }}></div>
            </div>
        </div>
    );
}

export default FloatingHeader;