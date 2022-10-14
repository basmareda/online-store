import { Component } from "react";
import Thecard from "./Card";
//import React, { useEffect } from "react";
//import { useState } from "react";

export default class Products extends Component {
    products=[
        {id:"1", productName:"DELL" , 
        desc:"dell Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor",detailslink:"show details", imgscr:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
        {id:"2", productName:"HP" , 
         desc:"2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details" , imgscr:"https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"3", productName:"LENOVO" , 
        desc:"lenovo 15-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details", imgscr:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
        {id:"4", productName:"LENOVO" ,
         desc:"lenovo 16-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details", imgscr:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
        {id:"5", productName:"HP" ,
         desc:"2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor",detailslink:"show details", imgscr:"https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"6", productName:"HP" , 
         desc:"2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details" , imgscr:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
        {id:"7", productName:"HP" , 
        desc:"2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details", imgscr:"https://images.pexels.com/photos/11129922/pexels-photo-11129922.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"8", productName:"DELL" , 
        desc:"dell 15-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details", imgscr:"https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"9", productName:"DELL" ,
         desc:"dell 2019 Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor",detailslink:"show details", imgscr:"https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"10", productName:"HP" ,
          desc:"2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor ", detailslink:"show details" , imgscr:"https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id:"11", productName:"LENOVO" ,
         desc:"lenovo  16-inch HD Thin and Light Laptop, frccc Intel Quad-Core Processor", detailslink:"show details", imgscr:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
        {id:"12", productName:"HP" , 
        desc:"2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor", detailslink:"show details", imgscr:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
    ]
    
render() {
   
    return (
        <div className="p-5 bg-light text-center">
            <h1 className="text-danger mb-4 fw-bold">Our Products </h1>
            <div className="container">
                <div className="row g-3">
                  {/* loop on array of objects (products) k product for each item */}
                    {this.products.map((product) => {
                        return <Thecard key={product.id} productinfo={product} />;

                    })}
                </div>
            </div>

        </div>
    
        


    );
}
}