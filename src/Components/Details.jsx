import React from 'react'

export default function Details() {
  return (
  
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Trendy Pants and Shoes"
          className=" imgofdet ms-5 mt-5"/>
          <p className="card-text">
          <small className=" text-primary">Launched in 2022</small></p>
   
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title mt-5 fw-bold">HP ZBook</h5>
          <p className="card-text text=start">
        
          2022 HP Premium
          <br></br>
           14-inch HD
          <br></br>
           Thin and Light Laptop, 
           <br></br>
           Intel Quad-Core Processor,
           <br></br>
            8GB RAM, 
            <br></br>
          64GB Storage,
          <br></br> 
          Long Battery Life
          <br></br>
           Webcam,
          <br></br>
           Bluetooth,
           <br></br> 
           HDMI,
           <br></br>
            Wi-Fi,
           <br></br>
            Jet Black,
            <br></br>
             Windows 11 
             <br></br>
             1 Year Microsoft 365
               </p>
                  
           <a href='./products'>  <button className='btn bg-success text-white p-2 m-2 text-capitalize'>back to all products</button> </a>
           <a href='./contact'>  <button className='btn bg-success text-white p-2 m-2 text-capitalize'>buy now !</button> </a>
   
        </div>
      </div>
    </div>
  </div>
  )
}
