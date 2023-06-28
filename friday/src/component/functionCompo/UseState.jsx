import React, { useState } from 'react';

function UseState(props) {
    const [name,setName] = useState  ('Tops')
    const [Author,setAuthor] = useState('uday')

    const Btnclick=()=>{
        console.log("btn called");
        setName("Tops Tech")
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{name}</h1>

                    <button className='btn btn-primary' onClick={Btnclick}>click</button>
                     
                     <h2>{Author}</h2>
                     <button className='btn btn-success' onClick={()=>
                    {setAuthor("Uday Roy")}}>click</button>

                </div>
            </div>
        </div>
            
        </>
    );
}

export default UseState;