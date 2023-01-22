import React from "react";
import "./question.css";
import { NewQuestion } from "../typeQuestion/newquestion";
import { Banque } from "../banqueDonnees";
import Grid from '@mui/material/Grid';
import { ProgressBar } from "../progressBar";
import { useNavigate,useParams } from "react-router";
import { ViewAperçu } from "../ViewAperçu";



var numberQ = 0;
function Question(){
  const nav4 = useNavigate();
  const params = useParams();
  
  const [question_item, Setquestion_item] = React.useState([]);


  const Add = () => {
    const test = numberQ + 1;
    Setquestion_item([...question_item,test]);
  }

  return(
    <>
     <ProgressBar bar_value='25%'/>

    <Grid container spacing={1} sx={{ borderTopStyle: 'solid', borderTopWidth: '1px', borderTopColor: '#d9d9d9', marginTop:'3.75%'}}>
  <Grid item xs={3} sx={{ borderRightStyle: 'solid', borderRightWidth: '1px', borderRightColor: '#d9d9d9'}}>
    <Banque/>
  </Grid>
  <Grid item xs={9} sx={{ borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: '#d9d9d9'}}>

      <div id='top_start'>
        <h5 id='titre_sondage404'>{params.titre_sondage}</h5>
      </div>
      <div id='container542'>
            <div className='remove'>
                
            </div>
            <ViewAperçu id_sondage={params.id_sondage}/>
            <NewQuestion/>
            {question_item.map((index) =>  <NewQuestion key = {index}/>)} 
           
            

            </div>
            <div id='ajout'>
                <button className='nouvelle_q' onClick={Add}>+ Nouvelle question</button>
            </div>
            <div id='end'>
            <button id='enregistrer' onClick={() => {nav4(`/Aperçu/${params.id_user}/${params.titre_sondage}/${params.id_sondage}`)}}>Enregistrer le sondage</button>
            </div>

   
            </Grid>
            </Grid>

    </>
  )
}
export {Question}