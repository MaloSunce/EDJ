import '../styles/FloatingHeader.css'

import {RiFacebookCircleLine, RiSoundcloudLine, RiYoutubeLine} from "react-icons/ri";
import {AiOutlineSpotify} from "react-icons/ai";

function FloatingHeader() {
    return (
        <div className="FloatingHeader">
            <a href="https://www.youtube.com" target="_blank">
                <RiYoutubeLine className="HeaderIcon"/>
            </a>
            <a href="https://open.spotify.com" target="_blank">
                <AiOutlineSpotify className="HeaderIcon"/>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <RiFacebookCircleLine className="HeaderIcon"/>
            </a>
            <a href="https://soundcloud.com" target="_blank">
                <RiSoundcloudLine className="HeaderIcon"/>
            </a>
            <div style={{width: '4rem'}}></div>
        </div>
    );
}

export default FloatingHeader;