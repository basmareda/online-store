import { Component } from "react";
import {Card ,Button } from "react-bootstrap";

export default class Thecard extends Component {
    constructor(){
        console.log("Constructor");
        super();
    }
    state={
        count:0,
    }
    clickHandler = () =>{
    this.setState({
        count: this.state.conut + 1
    });
    };

render() {
    let {productinfo}= this.props;
    console.log(this.props);


    return (
        <div className="col-lg-3 col-sm-6 col-md-4">
        <Card className="">
        <Card.Img variant="top" src={productinfo?.imgscr} />
        <Card.Body>
        <Card.Title className="text-danger fw-bold">{productinfo?.productName} </Card.Title>
        {/* <span className="text-danger" fs-4>count is {this.state.count}</span>  */}
        <Card.Text>
        <p> {productinfo?.desc}</p>
        </Card.Text>
        <div class="container">
            <div className="row g-3">
            <div className="">
                {""}
                <a href='./details'> <Button variant="dark"  className="text-capitalize"> {productinfo?.detailslink}</Button></a>
            </div>
            
            </div>

        </div>
        </Card.Body>
    </Card>
    </div>

    )};
}
