import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';

function Analyse(){
  const navigate = useNavigate();
  return(
    <>
    <div style={{marginTop: '3.75%'}}>
     Analyse des résultats
    </div>
    
    </>
  )
}

export {Analyse};