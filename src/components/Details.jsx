import React from "react";
import { Col, Container, Row,Button, Card } from "reactstrap";
import data from "../JSON/data.json";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import Pop from "./Pop";
import Pop11 from "./Pop11";

export default function Details() {
  function goBack() {
    console.log("aaAA", data.cal);
    window.history.back();
  }
  let { id } = useParams();
  // const lo = data.find(id=>id== {id} );
  let y = { id };
  let d = y.id;
  console.log("gggfdgd", d);
  const lo = data.find((a) => a.id == d);
  // console.log("object",lo)
  const [openModal, setopenModal] = useState(false);
  let [value, setvalue] = useState([]);
  let [use,setUse]= useState([]);
  let [im,setIm]=useState([]);
  let [active, setActive] = useState(0);
  useEffect(() => {
    let newVal = [];
    lo.cal.map((x, i) => {
      newVal.push({
        altText: `Slide ${i}`,
        caption: `${i}`,
        key: i,
        src: x,
      });
    });
    console.log(newVal, "newVal");
    setvalue(newVal);
   
    

    let newVal1 = [];
    lo.facilities.map((x1) => {
      newVal1.push({
        src: x1.link,
        alt: x1.alt
      });
    });
    console.log(newVal1, "newVal1");
    setUse(newVal1);

  }, []);

  function togModal(){

    console.log("openn11",lo);
    setopenModal(!openModal);
  }
  ///////////

  return (
    <div>
      
      <Row>
      <div className="REheading1">
        <Row className="RE_back" style={{marginLeft:"10% "}} onClick={() => goBack()}>
        <img src="https://img.icons8.com/ios/50/000000/circled-left.png"/>
          <h4 style={{ display: "contents" }}>
            <strong style={{ marginTop: "60px",paddingLeft:"10px"}}><u>Back to search</u></strong>
          </h4>
        </Row>
      </div>
      
        <Col lg={6} >
          <div className="RE_DetailImg">
          
            <Carousel activeIndex={active} next={() => {}} previous={() => {}}  slide={false}  >
              <CarouselIndicators
                activeIndex={active}
                items={value}
               
                onClickHandler={(i) => setActive(i)}
                
              />
              {value.map((x) => (
                <CarouselItem className="RE_carousel">
                  <div class="RE_top-right"><img  style={{height:"20px",width:"50%"}} src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v1.png" /></div>
                  <img src={x.src} />
                </CarouselItem>
              ))}
              
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={() => {
                  if (active === 0) {
                    setActive(value.length - 1);
                  } else {
                    setActive(active - 1);
                  }
                }}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={() => {
                  if (active === value.length - 1) {
                    setActive(0);
                  } else {
                    setActive(active + 1);
                  }
                }}
              />
            
            </Carousel>
            
              
            <div className="RE_button">
            
              <Button onClick={togModal}>
              <p>Show All</p>  
              </Button>
              </div>
             {/* {openModal &&  <Pop open={setopenModal}  img={lo}  />} */}
           {openModal && <Pop11 open={setopenModal}  imp={lo} />} 
          </div>
              
        </Col>
        <Col lg={6}>

          <h3>{lo.company}</h3>
          <div className="RE_About">
              <b>Address :</b>
              <h6>4/11 Alagi Nagar</h6>
              <br/>
              <b>About :</b>
              <h6>Long living happy living area with spacious place.{lo.para}</h6>
              <br/>
              <b>Facilities :</b>
              <div className="RE_facilities" >
                <Container>
                  <Row>
                  {use.map((y) => (
                    <Col lg={3} mg={3} >
                  
                    
                    <img style={{height:"30px"}} varient="top" src={y.src} />
                    <p style={{ fontSize: "smaller",marginTop:"2%"}}>{y.alt}</p>
                      
                    
                    </Col>
                  ))}
                  </Row>
                </Container>
                </div>
          
     </div>
        </Col>
      </Row>
      
    </div>
  );
}
