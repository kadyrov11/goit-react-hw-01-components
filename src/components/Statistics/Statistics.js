import styles from './Statistics.module.css'

// ========colorPicker========
  
const arr = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
const arrMap = arr.map(item => {
  let colorPicker = "#" + ((1<<24)*Math.random() | 0).toString(16)
  return  `${colorPicker}`

})
let index = 0
if(index === arrMap.length){
     index = 0
}
// ===========================

const Statistics = ({ stats }) => (
    <section className={styles.statistics}>
  <h2 className={styles.title}>UPLOAD STATS</h2>

  <ul className={styles.statList}>
    {stats.map(stat => (
        <li className={styles.item} key={stat.id} style={{
        backgroundColor: arrMap[index += 1]
      }}>
         <span className={styles.label}>{stat.label} </span>
         <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
        )
    )}
  </ul>
</section>
)
export default Statistics