import "./App.css";
import NewExpense from "./Components/ExpenseForm/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  const addExpenseData = (expenseData) => {
    console.log(expenseData);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses />
    </div>
  );
}

export default App;
