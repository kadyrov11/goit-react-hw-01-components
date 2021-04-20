import styles from './FriendList.module.css'
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => {
   return ( <li className={styles.friend}>
        <img className={styles.friendImg} src={avatar} alt={name} />
        <p className={styles.friendName}>
            {name}
            <span className={isOnline ? styles.online : styles.offline}></span>
        </p>
    </li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;