import { useEffect, useState } from 'react';
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h3>User: {users.length} </h3>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
}
export default Users;
