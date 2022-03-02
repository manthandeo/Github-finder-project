import React from 'react'
import UserResult from '../components/users/UserResult'
import Usersearch from '../components/users/Usersearch'


function Home() {
  return (
    <>
      {/* Search Component */}
      <Usersearch />
      <UserResult />
    </>
  )
}

export default Home