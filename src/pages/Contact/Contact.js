import PartnerListColoured from '../../components/Partners/PartnerListColoured';
import Title from '../../components/Title/Title';
import Form from '../../pages/Contact/Form/Form';
import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import Img from '../../img/about-shape.png';
import Img2 from '../../img/about-shapeTablet.png';
import Ready from '../../components/Ready/Ready';
import './Contact.css';

const Contact = ({ title, info }) => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-8'>
            <Breadcrumb title='Submit a help request and we’ll get in touch shortly.' />
          </div>
        </div>
      </div>

      <div className='contact__partnersForm container pb-5'>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <Form />
          </div>
          <div className='contact__partners col-md-12 col-lg-6 mb-5'>
            <Title title='Join the thousands of innovators already building with us' />
            <PartnerListColoured />
          </div>
        </div>
      </div>

      <Ready />
      <img src={Img} alt='shape' className='contact__shape img-fluid' />
      <img src={Img2} alt='shape' className='contact__shapeTablet img-fluid' />
    </section>
  );
};

export default Contact;
