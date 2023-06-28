import React, { useEffect, useState } from 'react';

function FetchAPI(props) {
    const [status,setStatus] = useState("Pending...")
    const [data,setData] = useState('')

    useEffect(()=>{
        setTimeout(() =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>res.json())
            .then((Response)=>{
                console.log(Response);
                setStatus("Completed")
                setData(Response)
            }).catch((ErrorHandl)=>{
                console.log(ErrorHandl)
            })
        },3000);
    })
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{status}</h1>
                    <div>{status === "completed"?JSON.stringify(data):"No data found"}</div>
                </div>
                </div>
                </div>  
        </>
    );
}

export default FetchAPI;