import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const Logout = () => {
    const {user, setUser} = useContext(UserContext);
    
    const logoutUser = () => {
        sessionStorage.removeItem('GitEditorUser');
        setUser(null);
    }

    if(user) {
        return (
          <button className='logoutBTN' onClick={logoutUser}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fgeneric-user-icon%2Fgeneric-user-icon-13.jpg&f=1&nofb=1&ipt=a8a740634ab44ae501e89308f348efc5da9525b65d461667edeb2987a2237ce7&ipo=images" alt="Logout" />
            <p>Logout</p>
          </button>
        )
    }
    else {
        return null;
    }
}

export default Logout
