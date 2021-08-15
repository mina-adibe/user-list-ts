import React, {useState} from 'react'
import './App.css';
import User,{userInt} from "./components/Users"


const App: React.FC  = () => {

  
  interface AllUsersInt {
    currentUser : userInt ;
    allUsers: Array<userInt>
  }
 const [usersState, setUsersState] = useState<AllUsersInt>({
   currentUser : {
     name:"",
     age:"",
     job:"",
     deleteUser : () => {}
   },
   allUsers:[]
 })

 const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
  setUsersState(   { ...usersState , currentUser :{...usersState.currentUser  , [e.target.name]: e.target.value}})
 }

const submitForm = (e : React.SyntheticEvent) : void => {
  e.preventDefault()
  setUsersState({
    currentUser : {
      name:"",
      age:"",
      job:"",
      deleteUser : () => {}
    },
    allUsers: [
      ...usersState.allUsers, usersState.currentUser
    ]
  })
  console.log(usersState);
}


//delete 
const deleteHandler = (index : number) : void => {
  const filterUsers = usersState.allUsers.filter((user , i) =>{
    return index !== i 
  })
  setUsersState({
    ...usersState , allUsers: filterUsers
  })
}

//users
const allUsers = usersState.allUsers.map((user , i ) => (

 <User key={i} 
       name={user.name} 
       age={user.age}
       job={user.job}
       deleteUser={() => deleteHandler(i)}
       />
))


  return (
    <div >
    <h1>React with TypeScript</h1>
    <form onSubmit={submitForm}>      
    <label htmlFor="userName">Name: </label>
    <input 
    id="userName"
    required
    name="name"
    type="text"
    value={usersState.currentUser.name}
    onChange={onChangeHandler}
    />
      <label htmlFor="userAge">Age: </label>
    <input 
    id="userAge"
    name="age"
    type="number"
    value={usersState.currentUser.age}
    onChange={onChangeHandler}
    />
      <label htmlFor="userJob">Job: </label>
    <input 
    required
    id="userJob"
    name="job"
    type="text"
    value={usersState.currentUser.job}
    onChange={onChangeHandler}
    />
  
  <button type="submit">Add uer</button>
  </form>
  {allUsers}
  </div>
  )
}

export default App
