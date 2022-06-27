import { Link } from 'react-router-dom';
import Logo from '../../../img/footer-logo.png';
import Img1 from '../../../img/facebook.svg';
import Img2 from '../../../img/twitter.svg';
import Img3 from '../../../img/linkedin.svg';
import Shape from '../../../img/footer-shape.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper container'>
        <div className='footer__left'>
          <div className='footer__logo'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='img-fluid' />
            </Link>
          </div>

          <div className='footer__item text-white'>
            <ul className='footer__itemList'>
              <Link to='/pricing'>
                <li>Pricing</li>
              </Link>
              <Link to='/about'>
                <li>About</li>
              </Link>
              <Link to='/contact'>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className='footer__icons ml-auto'>
          <a href='!#'>
            <img src={Img1} alt='facebook-logo' />
          </a>
          <a href='!#'>
            <img src={Img2} alt='twitter-logo' />
          </a>
          <a href='!#'>
            <img src={Img3} alt='linkedin-logo' />
          </a>
        </div>

        <img src={Shape} alt='shape' className='footer__shape img-fluid' />
      </div>
    </footer>
  );
};

export default Footer;
