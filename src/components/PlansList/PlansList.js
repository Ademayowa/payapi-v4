import { BiCheck } from 'react-icons/bi';
import './PlansList.css';

const PlansList = ({ plan }) => {
  const { title, text, price, offers } = plan;

  return (
    <div className='plansList col-md-4 col-sm-12'>
      <div className='mt-5 mb-5'>
        <h4 className='plansList__title'>{title}</h4>
        <p className='plansList__text'>{text}</p>
        <>
          <h2 className='plansList__price'>{price}</h2>
          <hr />
        </>

        <div className='offers'>
          {offers.map((offer, index) => {
            return (
              <div key={index} className='plansList__check d-flex'>
                <div className='d-flex'>
                  <BiCheck className='mr-3' />
                </div>
                <p>{offer}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <button className='btn ml-lg-1 btn__request'>Request Access</button>
      </div>
    </div>
  );
};

export default PlansList;
