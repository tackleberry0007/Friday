import React, { Component } from 'react';

class State extends Component {
    constructor()
    {
        super()
    this.state = {"name":"Pankaj","age":"24"}
       
    }
    
    Btnclck=()=>{
        console.log("btn called");
        this.setState({name:"Pankaj Prasad","age":24})
    }
    render() {
        return (
            <>
               <div className="container" mt-5>
                <div className="row">
                    <div className="col">
                        <h1>{this.state.name}</h1>
                        <h1>{this.state.age}</h1>
                        <button className='btn btn-primary' onClick={this.Btnclck}>click</button>
                    </div>
                </div>
                </div> 
            </>
        );
    }
}

export default State;