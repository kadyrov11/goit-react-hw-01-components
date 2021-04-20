import styles from './FriendList.module.css'
import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types';

// import defaulImg from './image/pisunkovyi-zlodiy.png';

const FriendList = ({ friends }) => {
    const friendEl = friends.map(friend => <FriendListItem {...friend} key={friend.id} />);
    return (
        <ul className={styles.friendList}>
            {friendEl}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList