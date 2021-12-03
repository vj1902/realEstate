
import React from "react";
import { Col, Container, Row, Button, Card } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Modal,
} from "reactstrap";

export default function Pop11({ open, imp }) {
  let [value, setvalue] = useState([]);
  
  console.log("aqasqsqsq", imp);
  
  useEffect(() => {
    let newVal = [];
    imp.cal.map((x, i) => {
      newVal.push({
        altText: `Slide ${i}`,
        caption: `${i}`,
        key: i,
        src: x,
      });
    });
    console.log(newVal, "newVal");
    setvalue(newVal);

  }, []);

  return (
    <div>
      <Modal isOpen={open}>
        <Row>
          <div>
            <Row style={{ background: "antiquewhite" }}>
              <Col lg={6} mg={6}>
                <h3 style={{ marginTop: "2%" }}>{imp.company}</h3>
              </Col>
              <Col lg={6} mg={6}>
                <img
                  onClick={() => open(false)}
                  style={{
                    float: "right",
                    width: "5%",
                    height: "56%",
                    marginTop: "4%",
                    marginRight: "4%",
                  }}
                  src="https://img.icons8.com/plumpy/24/000000/macos-close.png"
                />
              </Col>
            </Row>
          </div>

          <Col style={{ background: "antiquewhite" }}>
            <div className="RE_DetailImg1">
              <div>
                <Carousel autoPlay>
                  {value.map((x) => (
                    <div>
                      <img style={{ height: "450px" }} src={x.src} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
