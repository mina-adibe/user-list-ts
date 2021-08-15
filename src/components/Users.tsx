import React from 'react'

export interface userInt {
    name : string ; 
    age? : string ;
    job : string ;
    deleteUser : () => void;
  }

const Users : React.FC<userInt> = ({name , age , job ,  deleteUser}) => {
  
    return (
        <div className="card">

           <div className="row">
           <h2>Name: {name}</h2>
          {age && <h2>Age: {age}</h2>} 
           <h2>Job: {job}</h2>
          <button onClick={ deleteUser}>Delete USer</button>
          </div> 
        </div>
    )
}

export default Users
