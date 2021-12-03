import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "reactstrap";
import data from "../JSON/data.json";
import { useNavigate ,Link} from 'react-router-dom';

export default function Recomd() {
  return (
    <div>
      <div className="RE_card_Recomd">
        <div>
          <h4
            style={{
              color: "white", 
              textAlign: "left",
              padding: "2px 0 0 8px",
            }}
          >
            Recommonded for You!!
          </h4>
        </div>
        <div className="RE_Rec">
          {data.map((a) => (
              <Link className="RE_Link"  to={
                {
                pathname:`/Details/${a.id}` }
            }> 
            <Card
              className="RE_Card_scroll"
              style={{ width: "18rem", height: "90%" }}
            >
              <Card.Img variant="top" src={a.img} />
              <Card.Body>
                <Card.Title>
                  <b>{a.Title}</b>
                </Card.Title>
                <Card.Text>
                  <div className="REtext">
                    <p style={{ marginTop: "-10px" }}>
                      <strong>{a.rate}</strong>
                    </p>
                    <p style={{marginTop:"-10px",width:"100%"}}>{a.para}</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
