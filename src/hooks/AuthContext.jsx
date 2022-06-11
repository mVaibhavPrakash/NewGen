import {createContext,useState} from 'react'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({children}) =>{
    const [User,setUser] = useState({})
    return(
        <AuthContext.Provider value={[User,setUser]}>
            {children}
        </AuthContext.Provider>
    )
}