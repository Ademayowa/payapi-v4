import Breadcrumb from '../../components/layout/Breadcrumb/Breadcrumb';
import Plans from '../../components/Plans/Plans';
import Ready from '../../components/Ready/Ready';
import Shape from '../../img/pricing.png';
import Shape1 from '../../img/pricing-tablet.png';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className='pricing'>
      <div className='pricing__plans'>
        <Breadcrumb title='Pricing' />
        <Plans />
        <Ready />
      </div>

      <img src={Shape} alt='shape' className='pricing__shape img-fluid' />
      <img src={Shape1} alt='shape' className='pricing__shapeTab img-fluid' />
    </section>
  );
};

export default Pricing;
