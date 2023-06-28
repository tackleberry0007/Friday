import React, { useEffect, useState } from 'react';

function Useeffect(props) {
    const [count,setcount] = useState(0)

    const ClckHandl=()=>{
        console.log("Btn called")
        setcount(count+1)
    }

    useEffect(()=>{
        setTimeout(() => {
            console.log("UseEffect called");
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>res.json())
            .then((Response)=>{
                console.log(Response);
            }).catch((ErrorHand1)=>{
                console.log(ErrorHand1)
            })
        },3000);
    },[ClckHandl])
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{count}</h1>
                    <button className='btn tbn-primart' onClick={ClckHandl}>click to increase the value</button>
                </div>
                </div>
                </div>  
        </>
    );
}

export default Useeffect;