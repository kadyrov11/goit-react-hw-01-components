import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => {
  const transactionElements = transactions.map(({ id, type, amount, currency }) =>
    <tr key={id} className={styles.transaction}>
      <td className={styles.transactionInfo}>{type}</td>
      <td className={styles.transactionInfo}>{amount}</td>
      <td className={styles.transactionInfo}>{currency}</td>
    </tr>
  );

return (
  <table className={styles.transactionTable}>
    <thead>
        <tr>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Currency</th>
        </tr>
    </thead>
    <tbody>
      {transactionElements}
    </tbody>
  </table>
)
};

export default TransactionHistory;
