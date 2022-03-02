import React from 'react'
import {useEffect, useContext} from 'react'
import Spiner from '../layout/Spiner'
import Useritem from './Useritem'
import Githubcontext from '../../context/github/Githubcontext'


function UserResult() {
    const {users,loader}=useContext(Githubcontext)
    
    // useEffect(()=>{
     // fetchUsers()

    // },[])
    if(!loader)
{
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user)=>(
            //   <h3>{user.login}</h3>
            <Useritem key={user.id} user={user}/>
          ))}
    
      </div>
    )

}
else 
{
    return <>
    <Spiner/>
    </>
}

}

export default UserResult