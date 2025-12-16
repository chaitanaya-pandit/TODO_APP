import React, { use } from 'react'
import Userstore from './Userstore';
import { useEffect } from 'react';
const Fetchuser = () => {
    const {user,loading,error,fetchuser,increment,decrement,counter,change,toggle}=Userstore();
    // useEffect(() => {
    //     fetchuser();
    // },[fetchuser])
    
  return (
    <div>
        {/* {loading && <h1>loading</h1>}
        {error && <h1>{error}</h1>}
        {user.map((item)=>{return(
           <div key={item.id}>
               <li>{item.firstName}</li>
               <li>{item.lastName}</li>
                <li>{item.age}</li>
                  <li>{item.email}</li>
            <li>{item.phone}</li>
            <br />
           </div>
        )})} */}
        <div>
            <button onClick={increment}>increment</button>
            <h1>{counter}</h1>
            <button onClick={decrement}>decrement</button>
            <br />
            <button onClick={change}>change</button>
            <p>{toggle}</p>
        </div>
    </div>
  )
}

export default Fetchuser