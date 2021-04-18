const TransactionHistory = ({ transactions }) => (     
  <table class="transaction-history">
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
    {transactions.map(transaction => 
          <tr key={transaction.id} className="transaction">
          <td className="td">{transaction.type}</td>
          <td className="td">{transaction.amount}</td>
          <td className="td">{transaction.currency}</td>
        </tr>
        )}
      </tbody>
  </table>
)

export default TransactionHistory


{/* <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> */}