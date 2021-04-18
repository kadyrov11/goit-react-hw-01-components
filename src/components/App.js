// import React from 'react';


import Profile from './Profile'
import user from "../JSON/user.json"

import Statistics from './Statistics'
import statisticalData from "../JSON/statistical-data.json"

import FriendList from './FriendList.js'
import friends from "../JSON/friends.json"

import TransactionHistory from './TransactionHistory.js'
import transactions from "../JSON/transactions.json"



const App = () => (
    <>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />

        <Statistics stats={statisticalData} />
        
        <FriendList friends={friends} />

        <TransactionHistory transactions={transactions} />

    </>
)

export default App