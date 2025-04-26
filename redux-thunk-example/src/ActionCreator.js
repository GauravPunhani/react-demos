import axios from "axios";
import React from 'react'

export const fetchUsers = () => {
  return async (dispatch) =>{
    dispatch({type:'FETCH_USERS_REQUEST'});
    try{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({type:'FETCH_USERS_SUCCESS',payload: resp.data})
    }catch(error){
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  }
}
export default fetchUsers;
