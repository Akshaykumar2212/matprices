import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser : {},
    setCurrentUser : () => {},
    userToken : {},
    setUserToken : () => {},
    APP_NAME : null,
    CLIENT_URL : null,
    SERVER_URL : null
});

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('');
    const [userToken, setUserToken] = useState('');
    const APP_NAME = 'MAT PRICES : ';
    const CLIENT_URL = 'http://localhost:3000';
    const SERVER_URL = 'http://localhost:8000';
    return(
        <StateContext.Provider value={{
            currentUser, setCurrentUser, userToken, setUserToken, APP_NAME, CLIENT_URL, SERVER_URL
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useContextProvider = () => useContext(StateContext);