import React from 'react'
import { useState, useContext } from 'react'
import Githubcontext from '../../context/github/Githubcontext'
import Alertcontext from '../../context/alert/Alertcontext'

function Usersearch() {
    const [text, setText] = useState("")

    const { users, searchUsers, clearusers } = useContext(Githubcontext)

    const {setAlert}= useContext(Alertcontext)

    const handleChange = (e) => {
        //  console.log(e.target.value)  
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === "") {
            setAlert('please enter some thing','error')
        }
        else {
            searchUsers(text)
            setText("")
        }
    }


    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}
                            />

                            <button
                                type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                                Go
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            {users.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={clearusers}>
                        CLEAR
                    </button>
                </div>
            )}

        </div>
    )
}

export default Usersearch