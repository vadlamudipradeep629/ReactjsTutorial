import AddExpense from './ExpenseItem';
import './Expense'
import Card from '../UI/Card';

    const ExpenseList = (props) => {
        const expenses = props.Items;

      
        return (
          <Card className="expense-list">
            {expenses.map((expense) => (
              <AddExpense
                date={expense.date}
                id={(expense.id)}
                title={expense.title}
                location={expense.location}
                price={expense.price}
              />
            ))}
          </Card                                                                                                            >
        );
      };
      
export default ExpenseList ;