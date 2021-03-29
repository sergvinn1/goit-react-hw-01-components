import React from 'react'
import style from "./Transactions.module.scss";

const TransactionTr = ({ id, type, amount, currency }, i) => {
  const trClassName = i % 2 === 1 ? style.grey : style.white 
  return (
    <tr key={id} className={trClassName}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionBody = ({ items }) => {
    if (items.length === 0) return null
        return (
          <tbody className={style.tbody}>{items.map(TransactionTr)}</tbody>
        );   
} 

const Transactions = ({ transactions }) => {
    return (
      <table className={style.transactionHistory}>
        <thead className={style.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <TransactionBody items={transactions} />
       </table>
    );
};
export default Transactions
