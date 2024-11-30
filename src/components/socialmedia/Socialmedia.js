import React from 'react';
import "./socialmedia.css"
import instaimg from '../../assets/images/instagram_logo.png'
import facebimg from '../../assets/images/facebook_logo.png'
import tiktokimg from '../../assets/images/tiktok_logo.png'

const SocialMedia = () => {
  return (
    <div>
      <div className='ueberschrift'>Bleibe auf dem Laufenden</div>
      <div className="social-media-links">
        <div className="social-media-item">
          <img 
            src={instaimg} 
            alt="Instagram" 
          />
        </div>
        <div className="social-media-item">
          <img 
            src={facebimg}
            alt="Facebook" 
          />
        </div>
        <div className="social-media-item">
          <img 
            src={tiktokimg}
            alt="Twitter" 
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;