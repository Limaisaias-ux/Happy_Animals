import React from "react";
import './Services.css';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";

function Services() {
  return (
    <>
      <CardGroup className="fundão">
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
      </CardGroup>
    </>
  )
}
export default Services