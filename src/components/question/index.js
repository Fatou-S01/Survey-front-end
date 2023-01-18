import React from "react";
import "./question.css";
import { NewQuestion } from "../typeQuestion/newquestion";
import { Banque } from "../banqueDonnees";
import Grid from '@mui/material/Grid';
import { Aperçu } from "../aperçu";
import { Analyse } from "../analyse";
import { Send } from "../send/send";
import { ProgressBar } from "../progressBar";
import { next1 } from "../../themeProgress";
import { prev1 } from "../../themeProgress";



var numberQ = 0;
function Question(){
  
  const [question_item, Setquestion_item] = React.useState([]);
  const [save, setSave] = React.useState(0);

  const Add = () => {
    const test = numberQ + 1;
    Setquestion_item([...question_item,test]);
  }

  return(
    <>
     <ProgressBar/>
    {
    save == 0 ? 
    <Grid container spacing={1} sx={{ borderTopStyle: 'solid', borderTopWidth: '1px', borderTopColor: '#d9d9d9', marginTop:'3.75%'}}>
  <Grid item xs={3} sx={{ borderRightStyle: 'solid', borderRightWidth: '1px', borderRightColor: '#d9d9d9'}}>
    <Banque/>
  </Grid>
  <Grid item xs={9} sx={{ borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: '#d9d9d9'}}>

      <div id='top_start'>
        <h5 id='titre_sondage'>Sondage 1</h5>
      </div>
      <div id='container'>
            <div className='remove'>
                
            </div>
            <NewQuestion/>
            {question_item.map((index) =>  <NewQuestion key = {index}/>)} 
           
            

            </div>
            <div id='ajout'>
                <button className='nouvelle_q' onClick={Add}>+ Nouvelle question</button>
            </div>
            <div id='end'>
            <button id='enregistrer' onClick={() => {setSave(1);}}>Enregistrer le sondage</button>
            </div>

   
            </Grid>
            </Grid>
            : (save == 1) ? <><Aperçu/><button onClick={() => {setSave(0)}}>Previous</button>
            <button onClick={() => {setSave(2)}}>Next</button></>: (save == 2) ?<><Send/><button onClick={() => {setSave(1)}}>Previous</button><button onClick={() => {setSave(3)}}>Next</button></>: (save == 3)?<><Analyse/><button onClick={() => {setSave(2)}}>Previous</button></>:<div>Finish</div>
}
    </>
  )
}
export {Question}