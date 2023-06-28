import React, { Component } from 'react';
import Reusable from './ReusableCompo'

class compo extends Component {
    render() {
        return (
            <>
              <div className="container mt-5">
                <div className="row">
                 <div className="col-3">
                 <Reusable ImgSrc='img/KTM.webp'
                    title='KTM' oldPrice='13000'
                    NewPrice='10000'/>
                 </div>



                 <div className="col-3">
                 <Reusable ImgSrc='img/Honda.jpg'
                    title='Honda 150cc' oldPrice='12000'
                    NewPrice='11000'/>
                 </div>



                 <div className="col-3">
                 <Reusable ImgSrc='img/Vintage.jpg'
                    title='Vintage road-king' oldPrice='17000'
                    NewPrice='15000'/>
                 </div>



                 <div className="col-3">
                    <div className="card text-center">
                        <img src="img/R6.webp" alt="" />
                        <div className="card-body">
                            <h3>R6-350cc</h3>
                            <span>Old Price:$<del>16000</del></span>
                            <span>New Price:$12000</span>
                            <center><button className='btn btn-primary'>Buy Now</button></center>
                        </div>
                    </div>
                 </div>

                    </div>
                    </div>  
            </>
        );
    }
}

export default compo;