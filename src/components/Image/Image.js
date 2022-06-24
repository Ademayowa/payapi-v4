import Shape from '../../img/about-img-shape.png';
import Img from '../../img/about-img.png';
import './Image.css';

const Image = () => {
  return (
    <section className='aboutImg'>
      <img src={Img} alt='' className='img-fluid' />
      <img src={Shape} alt='' className='aboutImg__shape img-fluid' />
    </section>
  );
};

export default Image;
