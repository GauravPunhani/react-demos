import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchUsers from './ActionCreator';

const Userlist = () => {
    const {loading, users, error} = useSelector(state=>state.users);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
  return (
    <div>
        <h2>User list: </h2>
        {loading && <p>Loading...</p>}
        <ul>    
            {users.map((user=><li key={user.id}>{user.name} - {user.email}</li>))}
        </ul>
        
    </div>
  )
}

export default Userlist