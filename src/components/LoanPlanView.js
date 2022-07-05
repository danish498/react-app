import { Fragment } from 'react';
import downArrowIcon from '../assets/down_arrow.png';

import classes from './LoanPlanView.module.css';

const LoanPlanView = ({ currentItem, item, onSelect }) => {
  console.log();

  return (
    <Fragment>
      <button
        className={
          currentItem && currentItem.id == item.id
            ? 'selected-loan-view'
            : 'loan-view'
        }
        onClick={() => onSelect(item)}
      >
        <div style={{ width: '8%', justifyContent: 'center' }}>
          <img src={downArrowIcon} className='arrow-icon' />
        </div>
        <div style={{ width: '85%', alignItems: 'center' }}>
          <p className='loan-text'>{item.title}</p>
        </div>
      </button>
      {currentItem && currentItem.id == item.id && (
        <div
          className={
            currentItem && currentItem.id == item.id
              ? 'selecte-toogle'
              : 'toogle'
          }
        >
          {/* {item.description} */}
          <p className='subtitle1'>{item.subTitle1}</p>
          <p className='subtitle2'>{item.subTitle2}</p>
          <p className='subtitle3'>{item.subTitle3}</p>
          <p className='subtitle4'>{item.description}</p>
        </div>
      )}
    </Fragment>
  );
};

export default LoanPlanView;
