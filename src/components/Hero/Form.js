import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className='formInput input-group mt-lg-5 col-md-12 pl-lg-1'>
      <input
        type='text'
        className='form-control form-control-lg z-depth-1'
        placeholder='Enter email address'
      />
      <div className='input-group-append formInput__btn'>
        <Link to='#' className='btn__demo'>
          Schedule a Demo
        </Link>
      </div>
    </div>
  );
};

export default Form;
