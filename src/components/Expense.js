import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";

function Expense(props) {
  return (
    <div>
      
      <Card className="expenses">
      <ExpenseFilter />
      {props.items.map((expense) => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
        
      </Card>
    </div>
  );
}

export default Expense;
