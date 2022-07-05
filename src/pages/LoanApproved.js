import { useState } from 'react';
import LoanPlanView from '../components/LoanPlanView';
import LoanPlan from '../components/LoanPlan';

import classes from './LoanApproved.module.css';

const LoanApproved = () => {
  const [currentItem, setCurrentItem] = useState();

  const onToogle = (item) => {
    if (item.id === currentItem?.id) {
      setCurrentItem('');
    } else {
      setCurrentItem(item);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.loan_root}>
        <div>
          <h4>Congratulation you are approved for an intsallment loan</h4>
        </div>
        <div>
          <h4>
            Protecting your new loan is just as important as receiving it.
          </h4>
        </div>

        <div className={classes.loan_view_container}>
          {LoanPlan.map((item, index) => {
            return (
              <LoanPlanView
                currentItem={currentItem}
                item={item}
                onSelect={onToogle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoanApproved;
