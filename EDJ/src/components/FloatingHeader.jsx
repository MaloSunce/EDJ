import '../styles/FloatingHeader.css'

import { FaSpotify, FaYoutube, FaFacebook } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";

function FloatingHeader() {
    return (
        <div className="FloatingHeader">
            <FaSpotify className="HeaderIcon"><href></href></FaSpotify>
            <FaYoutube className="HeaderIcon"><href></href></FaYoutube>
            <RiSoundcloudLine className="HeaderIcon"><href></href></RiSoundcloudLine>
            <FaFacebook className="HeaderIcon"><href></href></FaFacebook>
            <div style={{width: '4rem'}}></div>
        </div>
    );
}

export default FloatingHeader;