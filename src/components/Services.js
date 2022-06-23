import React from "react";
import './Services.css';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";


function Services() {
  return (
    <>
     <div className="txtservices">
        <h1 className="txtitle">Demais Serviços</h1>
        <p className="txto">Ser dono de um animal de estimação significa mais amor e propósito na sua vida;
           mas é normal encontrar alguns desafios pelo caminho.
          </p>
          <p className="txto">Cuidar dos seus animais 
          sejam eles pássaros, peixes, répteis, anfíbios ou mamíferos - começa no momento em que eles fazem parte do seu lar.
          </p>
          <p className="txto">
          No(a) Happy Animals oferecemos uma variedade de serviços para ajudar você durante o período de adaptação e a tomar conta dos seus 
          animais de estimação.
          </p>
     </div>

      <CardGroup className="sergroup">
      <Card className="serum">
        <div className="contser">
          <Card.Title className="sertitle">Tosa para pets</Card.Title>
        </div>
        </Card>
        <Card className="serdois">
        <div className="contser">
          <Card.Title className="sertitle">Gravação em plaquinha</Card.Title>
          <Card.Title className="sertitle">de identificação</Card.Title>
        </div>
        </Card>
        <Card className="sertres">
        <div className="contser">
          <Card.Title className="sertitle">Consultoria sobre alimentação</Card.Title>
          <Card.Title className="sertitle">de animais de estimação</Card.Title>
        </div>
        </Card>
      </CardGroup>
      <Card.Link className="cnt">Entre em Contato</Card.Link>
    </>
  )
}
export default Services