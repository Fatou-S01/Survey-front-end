import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';

function Accueil(){
  const navigate = useNavigate();
  return(
    <>
    <div>
      <button onClick={() => navigate('/inscription')}>Créer Sondage</button>
    </div>
    </>
  )
}

export {Accueil};