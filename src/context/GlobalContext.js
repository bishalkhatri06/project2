import React,{createContext} from "react";

export const GlobalContext=createContext()

const GlobalContextProvider=(props)=>{
    const std={
        name:'Ram',
        age:20
    }
    return(
        <GlobalContext.Provider value={std}>
                {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider