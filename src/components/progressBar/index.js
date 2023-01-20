import React from 'react';
import "./progressBar.css";
import {useNavigate,useParams} from 'react-router-dom';



function ProgressBar() {
  const navigate = useNavigate();
  return(
    <>
        <div>
        <div className = 'container'>
            <div id='progress-container'></div>
            <div className='dfg'>
               <p className='p'>Création du sondage</p>
               <p className='p'>Aperçue</p>
               <p className='p'>Envoie du sondage
               </p>
               <p className='p' onClick={() => navigate('/1/analyse')}>Analyse des résultats</p></div>
               
        </div>
        </div>

       
        
        

        
    </>
    );
}
export {ProgressBar}