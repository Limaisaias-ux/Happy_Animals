import React from "react";
import './Banner.css';
import banner from '../img/bannerimg.jpg';
import Card from  'react-bootstrap/Card' ;
import { CardGroup } from "react-bootstrap";

function Banner(){
    return(
        <>
        <CardGroup className="container">
        <Card className="card text-center" style={{ width: "30rem", height:"30rem", }}>
          <Card.Body className="card">
            <Card.Title className="text">Seja Muito</Card.Title>
            <Card.Title className="text">Bem vindo à Happy Animals</Card.Title>
            <Card.Subtitle className="p">
            Especialistas em animais domésticos
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img className="img" src={banner} />
        </Card>
        </CardGroup>
      </>
    )
}
export default Banner