import React,{useContext} from 'react'
import { GloballContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GloballContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
          {transaction.text} <span>{sign}TK{Math.abs(transaction.amount)}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li> 
  )
}

export default Transaction