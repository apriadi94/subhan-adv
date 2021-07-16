import { createContext } from 'react'



export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {

    const globalState = {  }

    return(
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    )
}