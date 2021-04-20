import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
    const friendEl = friends.map(friend => <li className={styles.friend} key={friend.id}>
        <img className={styles.friendImg} src={friend.avatar} alt={friend.name} />
        <p className={styles.friendName}>
            {friend.name}
            <span className={friend.isOnline ? styles.online : styles.offline}></span>
        </p>
    </li>
    );
    return (
        <ul className={styles.friendList}>
            {friendEl}
        </ul>
    );
}

export default FriendList