import React from "react";
import Card from "react-bootstrap/Card";
import data from "../JSON/data.json";
import { Container, Row, Col } from "reactstrap";
import { useContext, useState } from "react";
import Details from "./Details";
import { useNavigate, Link } from "react-router-dom";

export default function Card1() {
  // const[photo,setPhoto]= useState('');
  // const history = useNavigate();
  // const handleClick = () => history.push('/some-route');

  // function onREhouse(e){
  //     console.log("clicked",e)

  //     setPhoto(e);
  //     const found = data.find(id => id == e);
  //     console.log("DATA Find",found);
  // }

  return (
    <div>
      <div></div>
      <div>
        <h3 style={{ textAlign: "left", margin: "0 10%" }}>
          Recommeded Houses for you
        </h3>
      </div>
      <div className="REcards">
        <Container>
          <Row>
            {data.map((a) => (
              <Col lg={3} md={3}>
                <Link
                  className="RE_Link"
                  to={{
                    pathname: `/Details/${a.id}`,
                  }}
                >
                  <Card className="RE_Card">
                    <Card.Img variant="top" src={a.img} />
                    <div className="RE_cardBody">
                      <div className="REcard-title">
                        <b>{a.title}</b>
                      </div>
                      <Card.Text>
                        <div className="REtext">
                          <p style={{ marginBottom: "0px" }}>{a.rate}</p>
                          <p style={{ marginBottom: "0px", width: "100%" }}>
                            {a.para}
                          </p>
                        </div>
                      </Card.Text>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
