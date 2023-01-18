import {React } from 'react';
import {useNavigate,useParams} from 'react-router-dom';

function Welcome(){
  const navigate = useNavigate();
  return(
    <>
    <div>
      <button onClick={() => navigate('/Creer_sondage/1/Survey')}>A partir de zero</button>
      <button>Modéles personnalisables</button>
      <button>Importer des questions</button>
    </div>
    </>
  )
}

export {Welcome};