import React,{useContext} from 'react'
import { GloballContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

  const {transactions} = useContext(GloballContext);

  //console.log(context);

  return (
      <>
          <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default TransactionList