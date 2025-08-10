import { Link } from 'react-router-dom';
import contact_info from '../Contact_info.jpg';

const Contact = () => {
  return (

    <div className='contact'>



        <nav className="contact-tabs">
            <a className="contact-button">Email</a>
        </nav>

        <nav className="contact-info">
            <a className="contact-button">contact@waffique.com</a>
          </nav>
      
        <nav className="contact-tabs">
            <a className="contact-button">Email</a>
        </nav>

        <nav className="contact-info">
            <a className="contact-button">contact@waffique.com</a>
          </nav>
        
    </div>

   );
};

export default Contact;