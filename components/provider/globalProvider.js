import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'


export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
    const { asPath } = useRouter()

    console.log(asPath)

    const globalState = {  }
    return(
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    )
}