import { createContext, useReducer } from "react";
import { useState } from 'react'
import Githubreducer from "./Githubreducer";


const Githubcontext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    const initialstate = {
        users: [],
        user:{},
        repos:[],
        loader: false,
    }

    const [state, dispatch] = useReducer(Githubreducer, initialstate)

    // const [users, setUsers] = useState([])
    // const [loader, setLoader] = useState(true)

    //Fetch user function / Get inintial user (testing purpose)
    const searchUsers = async (text) => {
        setloader()
        const params = new URLSearchParams({ q: text })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const { items } = await response.json()

        // setUsers(data)
        // setLoader(false)
        dispatch(
            {
                type: 'GET_USERS',
                payload: items,
            }
        )
    }
    
//Particular profile
const getuser = async (login) => {
    setloader()
    const response = await fetch(`${GITHUB_URL}/users/${login}`)

if(response.status === 404)
{
    window.location = '/notfound'
}
else{
    const data = await response.json()
    dispatch(
        {
            type: 'GET_USER',
            payload: data,
        }
        )
}    
}

//get user repos
const getuserrepos = async (login) => {
    setloader()
    const params = new URLSearchParams({ sort: 'created',
    per_page:10, })
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
    const data = await response.json()
    dispatch(
        {
            type: 'GET_REPOS',
            payload: data,
        }
    )
}


//Clear users from state
const clearusers = () =>dispatch({type:'CLEAR_USERS'})


    //Loader Function
    const setloader = () => dispatch({ type: 'SET_LOADER' })

    return <Githubcontext.Provider
        value={{
            users: state.users,
            user:state.user,
            loader:state.loader,
            repos:state.repos,
            searchUsers,
            clearusers,
            getuser,
            getuserrepos,
        }}
    >
        {children}
    </Githubcontext.Provider>

}

export default Githubcontext