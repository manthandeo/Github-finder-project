import { createContext,useReducer } from "react";
import Alertreducer from './Alertreducer'

const Alertcontext = createContext()

export const AlertProvider = ({children})=>{
    const initialState = null

    const [state,dispatch]=useReducer(Alertreducer,initialState)

    //Set alert
    const setAlert = (msg,type) => {
        dispatch({
            type:'SET_ALERT',
            payload:(msg,type),
        })
        setTimeout(() => dispatch({type:'REMOVE_ALERT'}), 3000)
    }

    return <Alertcontext.Provider value={{alert:state,setAlert}}>
                {children}
    </Alertcontext.Provider>    
}

export default Alertcontext