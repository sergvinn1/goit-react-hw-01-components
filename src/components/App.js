import React from 'react'
import Profile from './Profile'
import Statistics from './Statistics' 
import FriendsList from './FriendsList'
import Transactions from './Transactions'

import userData from "../components/data/user.json"
import statsData from "../components/data/statistics.json"
import friends from '../components/data/friends.json'
import transactions from '../components/data/transactions.json'


const App = () => { 
    return (
      <>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics items={statsData} />
        <FriendsList friends={friends} />
        <Transactions transactions={transactions} />
      </>
    );
    
}
export default App