import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import LifeCycle from './LifeCycle/LifeCycle'
import TableList from './Crud/TableList'

function App() {
  const isSet  = true;

  const [userState, setUserState] = useState({
    users: [
      {name: 'Hari', id: 23},
      {name: 'Ravi', id: 23},
      {name: 'Ganesh', id: 23}
    ]
  })

  const tabState = {
    tabVal :[
      {'label': 'Home', 'value': '/home'},
      {'label': 'About', 'value': '/about'},
      {'label': 'Users', 'value': '/users'},
      {'label': 'Contact Us', 'value': '/contact-us'}
    ]
  }

  const userStateTriggeredviaClick = () => {
    setUserState({
      users: [
        {name: 'Hari Prasanth', id: 23},
        {name: 'Ravi', id: 13},
        {name: 'Ganesh Iyer', id: 93}
      ]
    })
  }

  const renderSomething = () => {
    const name = 'TESTING TIME'
    return (
      <p> {name} Tamil ARASU </p>
    );
  }

  const OnchangeEventTriggered = (event) => {
    setUserState({
      users: [
        {name: event.target.value, id: 23},
        {name: 'Ravi', id: 13},
        {name: 'Ganesh Iyer', id: 93}
      ]
    })
  }

  console.log(userState);
  return (
    <div className="App">
      {/* <Header tabvalue={tabState.tabVal}/>
      <UserInput change={OnchangeEventTriggered}/>
      <UserOutput userName={userState.users[0].name}>SAMPLE TEXT</UserOutput>
      <div>
      {
        isSet && 
        <UserOutput userName={userState.users[1].name}> IF CONDITION CHECK</UserOutput>
      }
      </div>
      <UserOutput userName={userState.users[2].name}/>

      <button onClick={userStateTriggeredviaClick}>Change</button> */}
      
      {/* <LifeCycle></LifeCycle> */}
      <TableList></TableList>
    </div>
    // <Home></Home>
  );
}

export default App;
