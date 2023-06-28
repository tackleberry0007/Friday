import React, { Component } from 'react';

class StateRevision extends Component {
    constructor()
    {
        super()
        this.state={Movie:"KGF",Actor:"Yash"}
    }
    render() {
        return (
            <>
            <div className="conatainer">
                <div className="row">
                    <div className="col">
                        <h1>Movie Name : {this.state.Movie}</h1>
                        <h1>Actor Name : {this.state.Actor}</h1>
                        <button className='btn btn-primary' onClick={()=>{this.setState({Movie:"Salaar",Actor:"Prabhas"})}}>click to change the Movie</button>
                    </div>
                </div>
            </div>
                
            </>
        );
    }
}

export default StateRevision;