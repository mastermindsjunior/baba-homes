import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userEmail = sessionStorage.getItem('GitEditorUser');
        setUser(userEmail? userEmail : null);
    },[])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}