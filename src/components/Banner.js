import React from "react";
import './Banner.css';
import banner from '../img/bannerimg.jpg';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";

function Banner() {
  return (
    <>
      <CardGroup className="container">
        <Card className="cardbody text-center" style={{ width: "30rem", height: "30rem", }}>
          <Card.Body className="cardbody">
            <Card.Text className="text">Seja Muito</Card.Text>
            <Card.Text className="text">Bem vindo(a)</Card.Text>
            <Card.Text className="text">À</Card.Text>
            <Card.Text className="text">Happy Animals</Card.Text>
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