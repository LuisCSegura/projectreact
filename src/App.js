import React, { useState } from 'react';
import Tweet from './Tweet'

function App() {

  const [users, setUsers] = useState([
    { name: 'Eduard', message: 'Hello There', likes: 23 },
    { name: 'Caroline', message: 'Im funny', likes: 12 },
    { name: 'John', message: 'Im John Snow', likes: 777 },
  ]);

  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;