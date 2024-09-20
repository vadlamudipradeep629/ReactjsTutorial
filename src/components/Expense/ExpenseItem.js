import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const AddExpense=(props)=>{
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
<button className="expense-item__delete-btn">DELETE</button>
    </Card>
   
    
  );
}

export default AddExpense