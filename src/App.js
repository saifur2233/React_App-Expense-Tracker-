import Header from "./component/Header";
import Balance from "./component/Balance"
import IncomeExpense from "./component/IncomeExpense";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

import './App.css'

import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
