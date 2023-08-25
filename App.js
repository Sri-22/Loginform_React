import React, { useState } from 'react'

export default function App() {
  const [data, setData] = useState(
    {
      username : "",
      password : "",
    }
  );
  const {username,password} = data;
  const changeHandler = e => {
    setData({...data ,[e.target.name]:[e.target.value]});
    }
  const submitHandler = e => {
      e.preventDefault();
      console.log(data.username,data.password)
      }
        
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type='text' name='username' placeholder='UserName' value={username} onChange={changeHandler}></input><br/>
          <br/><input type='password' name = 'password' placeholder='Password' value={password} onChange={changeHandler}></input><br/>
          <br/><input type="submit"></input>
        </form>
      </center>
    </div>
  )
}
