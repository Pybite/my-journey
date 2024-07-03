import { createContext, useState, useEffect } from "react";



const UsrContext = createContext({});

export default function UsrContextProvider({children}){
  const [user, setUser] = useState(null);
  useEffect( () =>{
    fetch('http://localhost:3001/profile').then(({r}) => {
      setUser(r);
    })
  }, [])
  return(
    <UsrContext.Provider value={user, setUser}>
    {children}
    </UsrContext.Provider >
  )
}
