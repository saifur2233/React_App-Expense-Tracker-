import React,{useContext} from 'react'
import { GloballContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GloballContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);  

  return (
      <div>
          <h4>Your Balance</h4>
      <h1 id='balance'>TK. {total}</h1>
    </div>
  )
}

export default Balance