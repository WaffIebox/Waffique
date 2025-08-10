import tiktok_logo from '../assets/TikTok_Icon.png'
import insta_logo from '../assets/insta-icon.png'
import Privacy_Policy from '../assets/Waffique_Privacy_Policy.pdf'
import Terms_of_Service from '../assets/Waffique_Terms_of_Service.pdf'

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* List items should be inside a <ul> or <ol> */}
        <li>© 2025 Waffique Ltd. All Rights Reserved.</li>

      <div className="logos">
          <li>
            <a href="https://www.instagram.com/waffique.store/" target="_blank" rel="noopener noreferrer">
              {/* img tag is self-closing in JSX */}
              <img src={insta_logo} alt="Instagram Logo" className="insta_logo" />
            </a>
          </li>

          <li>
            <a href="https://www.tiktok.com/@waffique.store" target="_blank" rel="noopener noreferrer">
             <img src={tiktok_logo} alt="TikTok Logo" className="tiktok_logo" />    
            </a>
          </li>
      </div>

      <div className="tos_pp">
          <li>
            <a href={Privacy_Policy} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </li>
          <li>
            <a href={Terms_of_Service} target="_blank" rel="noopener noreferrer">Terms of Service</a>
          </li>
      </div>

    </footer>
  );
};

export default Footer;
