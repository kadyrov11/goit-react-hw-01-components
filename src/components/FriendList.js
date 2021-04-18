const FriendList = ({ friends }) => (
    <ul className="friends-list">
        {friends.map(friend => 
            <li className="friend" key={friend.id}>
                <img className="friend-img" src={friend.avatar} />
                <p className="friend-name">{friend.name}</p>
                <span className="isOnline"></span>
          </li>
         )}
    </ul>
)

export default FriendList