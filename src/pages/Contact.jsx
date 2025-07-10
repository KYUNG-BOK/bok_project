import './Contact.scss';
import { FaGithub, FaEnvelope, FaBlog } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">📮 Contact</h1>
        <div className="contact-list">
          <a href="mailto:ycoco3807@gmail.com" className="contact-item" target="_blank" rel="noreferrer">
            <FaEnvelope className="icon" />
            <span>ycoco3807@gmail.com</span>
          </a>
          <a href="https://github.com/KYUNG-BOk" className="contact-item" target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
            <span>github.com/KYUNG-BOk</span>
          </a>
          <a href="https://velog.io/@yoonddubi" className="contact-item" target="_blank" rel="noreferrer">
            <FaBlog className="icon" />
            <span>velog.io/@yoonddubi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
