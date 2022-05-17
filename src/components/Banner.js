import React from "react";
import './Banner.css';
import banner from '../img/bannerimg.jpg';
import Card from  'react-bootstrap/Card' ;
import { CardGroup } from "react-bootstrap";

function Banner(){
    return(
        <>
        <CardGroup className="container">
        <Card className="text-center" style={{ width: "30rem", height:"30rem", }}>
          <Card.Body className="card">
            <Card.Title className="text">Seja Muito</Card.Title>
            <Card.Title className="text">Bem vindo à Happy Animals</Card.Title>
            <Card.Subtitle className="p">
            Especialistas em animais domésticos
            </Card.Subtitle>
            <Card.Text className="text">
              Entre em Contato
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={banner} />
        </Card>
        </CardGroup>
      </>
    )
}
export default Banner