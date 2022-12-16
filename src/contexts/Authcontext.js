 import React, { useContext } from "react"

 const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
 }
// AuthProvider include  firebase auth email and password
export function AuthProvider({children}) {
    const value = {}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
 }