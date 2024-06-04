import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [ loading, setLoading ] = useState(false)

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
        setUser({id: 1, name: 'Ahmet', email: 'ah@ds.com'});
        setLoading(false);
    }, 1500)
  }

  const handleLogout = () => {
    setUser(null);
  }
  
  return <div>
    {!user &&  <button onClick={handleLogin}>{loading ? 'loading' : 'Log in'}</button>}
   
    {!loading && user &&
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    }

    {user && <button onClick={handleLogout}>Log out</button>}
  </div>;
}

export default Profile;
