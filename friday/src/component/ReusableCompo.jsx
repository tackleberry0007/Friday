import React, { Component } from 'react';

class ReusableCompo extends Component {
    render() {
        return (
            <div className="card text-center">
                        <img src={this.props.ImgSrc} alt="" />
                        <div className="card-body">
                            <h3>{this.props.title}</h3>
                            <span>Old Price:$<del>{this.props.oldPrice}</del></span>
                            <span>New Price:${this.propsNewPrice}</span>
                            <center><button className='btn btn-primary w-50'>Buy Now</button></center>
                        </div>
                    </div>
                
            
        );
    }
}

export default ReusableCompo;