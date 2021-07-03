import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import User from './User';

const UserList = () => {
    const [users, setUsers] = useState([]); 
    const [error, setError] = useState(null); 
    useEffect(() => {
      function fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res => setUsers(res.data))
          .catch(err => setError(err));
        };
   
      fetchData();
    }, []);
 
    return (
      <div>
      <h2>List of Users</h2>
          {users.map(user => (
            <User user={user}/>
           ))}
        
      </div>
    );
}

export default UserList