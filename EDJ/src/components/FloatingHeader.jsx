import '../styles/FloatingHeader.css'

import {RiFacebookCircleLine, RiInstagramLine,
    RiSoundcloudLine, RiYoutubeLine} from "react-icons/ri";
import { AiOutlineSpotify } from "react-icons/ai";
import star from '../../public/Icons/star.png';

function FloatingHeader() {
    return (
        <div className="FloatingHeader">
        
            <div className="StarIcon"> {/*Icons made by <a href="https://www.flaticon.com/authors/gowi" title="GOWI"> GOWI </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>*/}
                <a href="#"><img src={star} alt="Star Icon" /></a>
            </div>

            <div className="SocialMediaIcons">
                <a href="https://www.youtube.com" target="_blank">
                    <RiYoutubeLine className="HeaderIcon"/>
                </a>
                <a href="https://open.spotify.com" target="_blank">
                    <AiOutlineSpotify className="HeaderIcon"/>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <RiInstagramLine className="HeaderIcon"/>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <RiFacebookCircleLine className="HeaderIcon"/>
                </a>
                <a href="https://soundcloud.com" target="_blank">
                    <RiSoundcloudLine className="HeaderIcon"/>
                </a>
                <div style={{ width: '0.1rem' }}></div>
            </div>
        </div>
    );
}

export default FloatingHeader;