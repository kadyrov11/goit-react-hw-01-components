import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

// ========colorPicker========
  
const arr = new Array(70).fill("")
const arrMap = arr.map(item => {
  let colorPicker = "#" + ((1<<24)*Math.random() | 0).toString(16)
  return  `${colorPicker}`

})
let index = 0
if(index === arrMap.length + 1){
     index = 0
}
// ===========================

const Statistics = ({ stats }) => {
  const statEl = stats.map(stat => (
    <li className={styles.item} key={stat.id} style={{
      backgroundColor: arrMap[index += 1]
    }}>
      <span className={styles.label}>{stat.label} </span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
  )
  );

 return ( <section className={styles.statistics}>
    <h2 className={styles.title}>UPLOAD STATS</h2>

    <ul className={styles.statList}>
      {statEl}
    </ul>
 </section>
 )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }
  ))
}

export default Statistics