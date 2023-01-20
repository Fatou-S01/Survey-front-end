import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { NavbarAccueil } from '../../components/navbar/navAccueil.js';
import "./accueil.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container, width } from '@mui/system';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import outils from '../../assets/img/outils.png';
import objectifs from '../../assets/img/objectifs.webp';
import questions from '../../assets/img/questions.webp';
import hero from '../../assets/img/hero-img.png';
import questionnaire from '../../assets/img/Questionnaire-en-ligne.jpg';
import skills from '../../assets/img/skills.png';

function Accueil(){
  const navigate = useNavigate();
  return(
    <>
      <NavbarAccueil/>
      
      <section id="hero" className="d-flex align-items-center">
          <div className='container1 '>
              <Row>
                  <Col>
                      <h1 className="logo">Bienvenue dans<h2><i className="logo_1">Faki</i><i className="text-dark logo_2">Survey</i></h2></h1>
                      <h3 className="text-dark pb-3 animated zoomIn">Votre plateforme de création de sondage préférée</h3>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                          <a href="/inscription" className="btn-get-started scrollto creer">Créer sondage</a>
                      </div>
                  </Col>

                  <Col className="hero-img">
                    <Carousel controls='false' indicators='false' interval={3000}>
                      <Carousel.Item>
                        <img src={outils} style={{width: '770px'}} className="imsg-fluid animated" alt="1"/>
                      </Carousel.Item>
                      
                    </Carousel>
                  </Col>
              </Row>
          </div>
      </section>
      <section id="clients" className="clients section-bg">
              <center>
                  <div className="container">
                      <h2>Mes clients sont-ils satisfaits?</h2>
                  </div>
              </center>
      </section>
      <section id="skills" className="skills">
              <Container>
                  <Row className='mt-5' style={{height: '400px'}}>
                      <Col className="d-flex align-items-center">
                          <img src={hero} className="img-fluid" alt=""/>
                      </Col>
                      <Col className="pt-4 pt-lg-0 content">
                          <h3 style={{ marginTop: '100px' }}>Créer à partir de zéro</h3>
                          <p className="fst-italic">
                              A partir de zéro, créez votre propre sondage, en ajoutant vos propres questions et leurs propres types de réponse.
                          </p>
                          <div className="d-flex justify-content-center justify-content-lg-start">
                              <a href="#" className="sond">Créer sondage</a>
                          </div>
                      </Col>
                  </Row>
              </Container>
    </section>
    <section>
              <Container>

                  <Row style={{height: '400px'}}>

                      <Col className="content d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                              <h3>Créer à partir de modèles personnalisables</h3>
                              <p>
                                  Vous voulez y allez vite? Eh bien des modèles personnalisables sont déjà à votre disposition. Choisissez juste un et personnalisez le pour créer votre propre sondage.
                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">
                                  <a href="#" className="sond">Créer sondage</a>
                              </div>
                      </Col>
                      <Col className="align-items-stretch order-1 order-lg-2 quest" >
                        <img src={questionnaire} style={{width: '600px'}} alt='ques'/>
                      </Col>
                  </Row>
              </Container>

    </section>
    <Container>

              <Row className="mt-5" style={{height: '400px'}}>
                  <Col className="d-flex align-items-center">
                      <img src={skills} className="img-fluid" alt=""/>
                  </Col>
                  <Col className="pt-4 pt-lg-0 content">
                      <h3 style={{marginTop: '100px'}}>Importez vos questions</h3>
                      <p className="fst-italic">
                          A partir de zéro, créez votre propre sondage, en ajoutant vos propres questions et leurs propres types de réponse.
                      </p>
                      <div className="d-flex justify-content-center justify-content-lg-start">
                          <a href="#" className="sond">Créer sondage</a>
                      </div>
                  </Col>
              </Row>

    </Container>
    <section id="cta" className="cta">
              <Container className="container" data-aos="zoom-in">

                  <Row>
                      <Col className="text-center text-lg-start">
                          <h3>Répondre à un sondage</h3>
                          <p> Donnez vos avis sur des sondages publics afin de contribuer à l’aide à la prise de décision.</p>
                      </Col>
                      <Col className="cta-btn-container text-center">
                          <a className="cta-btn align-middle lig" href="#">Répondre sondage</a>
                      </Col>
                  </Row>

              </Container>
    </section>
    </>
  )
}

export {Accueil};