import './Form.css';

const Form = () => {
  return (
    <div className='pb-5'>
      <form className='forms'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control pt-4 pb-4'
            placeholder='Name'
          />
        </div>

        <div className='form-group'>
          <input
            type='email'
            className='form-control pt-4 pb-4'
            placeholder='Email'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control pt-4 pb-4'
            placeholder='Company Name'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control pt-4 pb-4'
            placeholder='Title'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control pt-4 forms__pb'
            placeholder='Message'
          />
        </div>

        <div className='form-check mt-4'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='forms__update form-check-label' for='exampleCheck1'>
            Stay up-to-date with company announcements and updates to our API
          </label>
        </div>
      </form>
      <button className='btn btn__request mt-4'>Submit</button>
    </div>
  );
};

export default Form;
