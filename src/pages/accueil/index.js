// import React, { useState, useEffect } from 'react';
// import {useNavigate,useParams} from 'react-router-dom';
// import { NavbarAccueil } from '../../components/navbar/navAccueil';
// import Carousel from 'react-bootstrap/Carousel';
// import { Container, width } from '@mui/system';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import outils from '../../assets/outils.png';
// import objectifs from '../../assets/objectifs.webp';
// import questions from '../../assets/questions.webp';
// import hero from '../../assets/hero-img.png';
// import questionnaire from '../../assets/Questionnaire-en-ligne.jpg';
// import skills from '../../assets/skills.png';
// import './accueil.css';
// import { Grid } from '@mui/material';
// import * as tf from '@tensorflow/tfjs';

// import Sentiment from 'sentiment';
// const sentiment = new Sentiment();


// function Accueil(){

//   const [phrase, setPhrase] = useState('');
//   const [sentimentScore, setSentimentScore] = useState(null);
//   useEffect(() => {
//     setSentimentScore(sentiment.analyze(phrase));
//   }, [phrase]);

//   return(
//     <>
    
//       <NavbarAccueil/>


//       <h2>Sentiment Analysis</h2>
//         <input value={phrase} onChange={e => setPhrase(e.target.value)}
//           style={{ {ing: '20px', fontSize: '20px', width: '90%' }} />
//         {
//           sentimentScore !== null ?
//             <p>Sentiment Score: {sentimentScore.score}</p>
//             : ''
//         }






     
//       <section id="hero" className="d-flex align-items-center">
//           <div className='container45 ' style={{backgroundColor: '#fff'}}>
//               <Grid container style= {{backgroundColor: '#fff'}}>
//                   <Grid item xs = {6}>
//                       <h1 className="logo45">Bienvenue dans<h2><i className="logo_1">Faki</i><i className="text-dark logo_2">Survey</i></h2></h1>
//                       <h3 className="text-dark pb-3 animated zoomIn">Votre plateforme de création de sondage préférée</h3>
//                       <div className="d-flex justify-content-center justify-content-lg-start">
//                           <a href="/inscription" className="btn-get-started scrollto creer">Créer sondage</a>
//                       </div>
//                   </Grid>

//                   <Grid item xs = {6} className="hero-img">
                   
//                         <img src={outils} style={{width: '600px',marginTop: '20px'}} className="imsg-fluid animated" alt="1"/>
                    
              
//                   </Grid>
//               </Grid>
//           </div>
//       </section>
//       <section id="clients" className="clients section-bg">
//               <center>
//                   <div className="container">
//                       <h2>Mes clients sont-ils satisfaits?</h2>
//                   </div>
//               </center>
//       </section>
//       <section id="skills" className="skills">
//               <Container>
//                   <Grid container className='mt-5' style={{height: '400px',backgroundColor: '#fff'}}>
//                       <Grid item xs = {6}className="d-flex align-items-center">
//                           <img src={hero} className="img-fluid" alt=""/>
//                       </Grid>
//                       <Grid className="pt-4 pt-lg-0 content" item xs = {6}>
//                           <h3 style={{ marginTop: '100px' }}>Créer à partir de zéro</h3>
//                           <p className="fst-italic">
//                               A partir de zéro, créez votre propre sondage, en ajoutant vos propres questions et leurs propres types de réponse.
//                           </p>
//                           <div className="d-flex justify-content-center justify-content-lg-start">
//                               <a href="#" className="sond">Créer sondage</a>
//                           </div>
//                       </Grid>
//                   </Grid>
//               </Container>
//     </section>
//     <section>
//               <Container>

//                   <Grid container style={{height: '400px', backgroundColor: '#fff'}}>

//                       <Grid item xs = {6} className="content d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
//                               <h3>Créer à partir de modèles personnalisables</h3>
//                               <p>
//                                   Vous voulez y allez vite? Eh bien des modèles personnalisables sont déjà à votre disposition. Choisissez juste un et personnalisez le pour créer votre propre sondage.
//                               </p>
//                               <div className="d-flex justify-content-center justify-content-lg-start">
//                                   <a href="#" className="sond">Créer sondage</a>
//                               </div>
//                       </Grid>
//                       <Grid item xs = {6}d v className="align-items-stretch order-1 order-lg-2 quest" >
//                         <img src={questionnaire} style={{width: '600px'}} alt='ques'/>
//                       </Grid>
//                   </Grid>
//               </Container>

//     </section>
//     <Container>

//               <Grid container className="mt-5" style={{height: '400px', backgroundColor: '#fff'}}>
//                   <Grid item xs = {6} className="d-flex align-items-center">
//                       <img src={skills} className="img-fluid" alt=""/>
//                   </Grid>
//                   <Grid item xs = {6} className="pt-4 pt-lg-0 content">
//                       <h3 style={{marginTop: '100px'}}>Importez vos questions</h3>
//                       <p className="fst-italic">
//                           A partir de zéro, créez votre propre sondage, en ajoutant vos propres questions et leurs propres types de réponse.
//                       </p>
//                       <div className="d-flex justify-content-center justify-content-lg-start">
//                           <a href="#" className="sond">Créer sondage</a>
//                       </div>
//                   </Grid>
//               </Grid>

//     </Container>
//     <section id="cta" className="cta">
//               <Container className="container" data-aos="zoom-in">

//                   <Grid container>
//                       <Grid item xs = {6} className="text-center text-lg-start">
//                           <h3>Répondre à un sondage</h3>
//                           <p> Donnez vos avis sur des sondages publics afin de contribuer à l’aide à la prise de décision.</p>
//                       </Grid>
//                       <Grid item xs = {6} className="cta-btn-container text-center">
//                           <a className="cta-btn align-middle lig" href="#">Répondre sondage</a>
//                       </Grid>
//                   </Grid>

//               </Container>
//     </section>
   
//     </>
//   )
// }

// export {Accueil};



import React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Modal, Card, Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

function Accueil(){

    const [modal2Open, setModal2Open] = useState(false);

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

   return(
     <>
        <Grid container>
        
        <Grid xs={3} id='theme'>
            <div id='theme1'>
                <a href='#' className='theme2' id='theme2_plus'>Thémes</a>
                <a href='#' onClick={() => setModal2Open(true)} className='theme2'>Education</a>
                <a href='#' className='theme2'>Environnement</a>
                <a href='#'className='theme2'>Santé</a>
                <a href='#'className='theme2'>Culture</a>
                <a href='#'className='theme2'>Sport</a>
                <a href='#'className='theme2'>Agriculture</a>
                <a href='#'className='theme2'>Commerce</a>

            </div>
        </Grid>
        <Grid xs={9} id='template'>
            <div className='Card444'>

            </div>
        </Grid>
    </Grid>
    <Modal
        className='modal'
        bodyStyle={{height: 650, backgroundColor: 'rgba(217,217,217,0.45)'}}
        title="Banque de questions pour:  Education"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        width={1000}

        >

        <Grid container>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 18,
                        marginTop: 30,
                        marginLeft: 30,
                        height: 100,
                        
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333'}}>Quel est votre age?</a>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 18,
                        marginTop: 30,
                        marginLeft: 30,
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Votre enfant lit-il souvent pour le plaisir?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>

        <Grid container>
        <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 18,
                        marginTop: 30,
                        marginLeft: 30
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Votre enfant fait-il des efforts dans ses taches scolaires?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 18,
                        marginTop: 30,
                        marginLeft: 30
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Faites-vous des efforts pour aider votre enfant à apprendre à la maison?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>

        <Grid container>
        <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 18,
                        marginTop: 30,
                        marginLeft: 30
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Dans quelle mesure l'école valorise-t-elle la diversité des origines des enfants?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 18,
                        marginTop: 30,
                        marginLeft: 30
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Selon vous, les enfants aiment-ils l'école?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
        
        </Modal>
     </>
    );
}

export {Accueil};

