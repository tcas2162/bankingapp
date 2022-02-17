import { useState, createContext } from 'react'

export const UserContext = createContext()
export function UserProvider({ children }) {

  const [ctx, setCtx] = useState({
    users: {},
    currentUser: ''
  })

  return (
    <UserContext.Provider value={[ctx, setCtx]}>
      {children}
    </UserContext.Provider>
  )
}