import React from 'react';
import './App.css'

import Profile from '../Profile/Profile'
import user from "../../JSON/user.json"

import Statistics from '../Statistics/Statistics'
import statisticalData from "../../JSON/statistical-data.json"

import FriendList from '../FriendList/FriendList'
import friends from "../../JSON/friends.json"

import TransactionHistory from '../TransactionHistory/TransactionHistory'
import transactions from "../../JSON/transactions.json"

const App = () => (
    <>
        <Profile {...user}/>

        <Statistics stats={statisticalData} />
        
        <FriendList friends={friends} />

        <TransactionHistory transactions={transactions} />

    </>
)

export default App