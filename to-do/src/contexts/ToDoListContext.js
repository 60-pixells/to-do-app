import React, { createContext } from "react";


const initState = [
    "First Task", "Second Task", "Third Task"
];
export const ListContext = createContext(initState)

export const TasksContext = ({children}) => {
    return(
        <ListContext.Provider value={initState}>
        {children}
    </ListContext.Provider> 
    )
}