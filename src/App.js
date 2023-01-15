import "./App.css";
import NewExpense from "./Components/ExpenseForm/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
