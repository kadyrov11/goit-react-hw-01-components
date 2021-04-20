import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    
  }
  ))
}


export default TransactionHistory;
