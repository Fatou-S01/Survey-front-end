import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { Navbar } from '../../components/navbar/index.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./welcome.css";
import outils from '../../assets/img/outils.png';
import { Container } from 'react-bootstrap';

function Welcome(){
  const navigate = useNavigate();
  return(
    <>
    <Navbar/>

    <section id="hero" className="align-items-center">

      <Container>
        <Row>
          <Col className="justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
            <h1 className="text-dark">Avec<h2><i className="vert">Faki</i><i className="text-dark">Survey</i></h2></h1>
            <h3 className="text-dark pb-3 animated zoomIn">Créer des sondages devient plus facile</h3>
          </Col>

          <Col className="order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={outils} style={{width: '770px'}} className="imsg-fluid animated" alt=""/>
          </Col>
      
        </Row>
      </Container>
    </section>
    <section id="clients" className="clients section-bg">
      <center>
        <div className="container votre">
          <h2>Comment voulez-vous créer votre sondage?</h2>
        </div> 
      </center>
    </section>

    <Row className="mt-5">
      <Col className="bord">
        <center>
        <h3>
          A partir de zéro
        </h3>
        <button className="btn1" onClick={() => navigate('/Creer_sondage/1/Survey')}>Cliquez ici</button>
        </center>
        
      </Col>
      <Col className="bord">
        <center>
          <h3>
            Modèles personnalisables
          </h3>
          <button className="btn1 ">Cliquez ici</button>
        </center>
      </Col>
      <Col>
      <center>
        <h3>
          Importez des questions
        </h3>
        <button className="btn1 ">Cliquez ici</button>
      </center>
        
      </Col>
    </Row>
    </>
  )
}

export {Welcome};