import Img from '../../img/about-shape.png';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import Vision from '../../components/Vision/Vision';
import Image from '../../components/Image/Image';
import Img2 from '../../img/about-shapeTablet.png';
import './About.css';
import Team from '../../components/Team/Team';
import Culture from '../../components/Culture/Culture';
import Ready from '../../components/Ready/Ready';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='row'>
          <div className='about__info col-md-12 col-lg-9'>
            <Breadcrumb title='We empower innovators by delivering access to the financial system' />
          </div>
          <Vision />
        </div>
      </div>
      <div className='about__fluid container-fluid'>
        <Image />
      </div>

      <Team />
      <div className='container'>
        <Culture />
      </div>
      <Ready />
      <img src={Img} alt='shape' className='about__shape img-fluid' />
      <img src={Img2} alt='shape' className='about__shapeTablet img-fluid' />
    </section>
  );
};

export default About;
