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
          <a href='https://www.instagram.com/bc_sachsen_90_bautzen?utm_source=qr&igsh=d2hqeTdzbnZiMGVh'><img 
            src={instaimg} 
            alt="Instagram" 
          /></a>
        </div>
        <div className="social-media-item">
          <a href='https://www.facebook.com/BCSachsen90/'>
          <img 
            src={facebimg}
            alt="Facebook" 
          /></a>
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