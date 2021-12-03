import React from "react";

// export default function Pop() {
//     return (
//         <div>

//         </div>
//     )
// }

import { Carousel } from "react-carousel-minimal";
import { CarouselItem, Col, Row } from "reactstrap";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { useContext, useState, useEffect } from "react";

export default function Pop({open, img}) {
  // {value.map((y)=>(
  // const data = {value}
  // ))}
  console.log("object",img)
  const[im,setIm]= useState([]);
const [data1,setData]= useState([])
  useEffect(() => {
    let newVal = [];
    img.cal.map((x, i) => {
      newVal.push({
        src: x,
      });
    });

    // {img.map((a)=>(
    //   setData(a.src)
    // ))}

    console.log(newVal, "Datas of img");
    setData(newVal)
  }, []);
 {data1.map((a)=>(
    setIm(a.src)
 ))}
  console.log("wwwsssaa",im)
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
//   const [modal, setModal] = React.useState(false);

//   // Toggle for Modal
//   const toggle = () => setModal(!modal);

  return (
    <div>
      {/* ///////////////////////////////////////// */}
      {/* <h4>ReactJS Reactstrap Modal Component</h4>
      <Button color="danger" >
        Click me to open Modal
      </Button> */}
      <Modal isOpen={open} >
        
            <Row style={{marginTop:"4%"}}>
            
                <Col ld={6} md={6}>
                    <h5 style={{marginLeft:"15%"}}>GGGFffgs</h5>
                </Col>
                <Col ld={6} md={6}>
                    <div className="RE_close" onClick={()=> open(false)}>
                       
                    <img style={{height: "auto"}} src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
                    
                    </div>
                </Col>
               
            </Row>
            {data1 && data1.map((d)=>(
        <ModalBody>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "0 20px",
              }}
            >
                  
              <Row style={{height:"650px"}}>
             
                <Carousel
                
                  time={5000}
                  width="850px"
                  opacity="1"
                  height="500px"
                //   captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                //   captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  // pauseIconColor="white"
                  // pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                  }}
                /> 

       
              </Row>
              
                 
            </div>
          </div>
        </ModalBody>
            ))}
        {/* <ModalFooter>
                    <Button color="primary" onClick={toggle}>Okay</Button>
                </ModalFooter> */}
      </Modal>
     
    </div>
  );
}
