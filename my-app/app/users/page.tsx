import React from 'react'

interface User {
  id:number,
  name :string,
  username: string,
  email:string 
}


const User = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[] = await res.json()
  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map(user=>(
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h3>{user.username}</h3>
            <h4>{user.email}</h4>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default User