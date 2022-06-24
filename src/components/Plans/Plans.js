import PlansList from '../PlansList/PlansList';
import plans from '../../plans';
import './Plans.css';

const Plans = () => {
  return (
    <section className='plans'>
      <div className='container px-4'>
        <div className='row'>
          {plans.map((plan) => (
            <PlansList key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
