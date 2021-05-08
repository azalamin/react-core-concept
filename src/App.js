/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = [
    {name: 'Ashik', age: 20, id: 1},
    {name: 'Sabbir', age: 21, id: 2},
    {name: 'Mahdi', age: 20, id: 3}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {
          friends.map(friend => <Friends friend={friend}></Friends>)
        }
        <Users></Users>
      </header>
    </div>
  );
}

function Friends(props){
  const friendsStyle = {
    border: '3px solid orange',
    width: '300px',
    borderRadius: '5px',
    padding: '5px',
    margin: '10px',
    background: '#333'
  }
  const {name, age, id} = props.friend
  return (
    <div style={friendsStyle}>
      <h2>Name: {name}</h2>
      <h4>Age: {age}</h4>
      <h4>Id: {id}</h4>
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {
        count > 0 && setCount(count - 1);
      }}>Decrease</button>
      <button onClick={() => setCount(count+ 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, []);

  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)

        }
      </ul>
    </div>
  )
}



export default App;
