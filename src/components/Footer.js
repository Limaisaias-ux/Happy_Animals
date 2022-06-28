import React from "react";
import './Footer.css';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
import { SiWhatsapp } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';


const Footer = () => {
  return (
    <>
      <CardGroup className="footer">
        <Card className="cardbodyf text-center" style={{ width: "15rem", height: "30rem", }}>
          <Card.Body className="cardbodyf">
            <Card.Text className="textf">Entre em Contato</Card.Text>
            <Card.Subtitle className="f">
            Av. Era uma Casa muita engraçada, 129 - São Paulo
            </Card.Subtitle>
            <Card.Subtitle className="f">
            limaisaias536@gmail.com
            </Card.Subtitle>
            <Card.Subtitle className="f">
              Tel: (12) 9999-9999
            </Card.Subtitle>
            <Card.Subtitle className="iconfo">
              <SiWhatsapp />
              <FaFacebookF />
              <GrInstagram />
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="cardbodyi" style={{ width: "15rem", height: "30rem", }}>
          <Card className="imgfoo" />
        </Card>
      </CardGroup>

      <div className='footertwo'>
        <span>©2022 por Happy Animals.</span>
      </div>
    </>
  )
}

export default Footer