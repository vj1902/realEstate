import React from 'react';
import '../CSS/style.css'
import {GrLocation} from "react-icons";
import {Container, Row, Col, Button} from "reactstrap"


const Head=()=>(
    <Container>
    <Row style={{margin:"0 -18px",width:"107%"}}>
        <Col lg={3} md={3}>
       

        <input type='text' placeholder='City or Address' />
        <img style={{width1:"10%",height:"30%",marginTop:"-25%",marginLeft:"-3px"}}  src="https://img.icons8.com/ios-glyphs/30/000000/worldwide-location.png"/>
        </Col>
        <Col lg={3} md={3}>
        <input placeholder='Add Dates'  />
        <img style={{width1:"10%",height:"30%",marginTop:"-25%"}} src="https://img.icons8.com/material-rounded/24/000000/planner.png"/>
        </Col>
        <Col lg={3} md={3}>
        <input placeholder='Members' />
        <img style={{width1:"10%",height:"30%",marginTop:"-25%",marginLeft:"-4px"}} src="https://img.icons8.com/ios-filled/24/000000/conference-call.png"/>
        </Col>
        <Col lg={3} md={3}>
        <button ><h4>Search</h4></button>

        </Col>
    </Row>
</Container>
)
export default function Header() {
    return (
      
            <div className="REheading">
                
                <h3  className="RE_H3" > Hello Vijay!</h3>
                
                <h1 style={{marginLeft:"10%"}}>What are You waiting for Book your Own House!</h1>
                
                <div className="REcontainer">
            
        <Head />
               
                 </div>
        </div>
    )
}
