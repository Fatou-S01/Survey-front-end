import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';

function Send(){
  const navigate = useNavigate();
  return(
    <>
    <div style={{marginTop: '3.75%'}}>
     Envoie du sondage
    </div>
    
    </>
  )
}

export {Send};