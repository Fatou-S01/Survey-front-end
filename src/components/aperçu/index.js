import {React,useEffect } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { ProgressBar } from '../progressBar';
import { next1 } from '../../themeProgress';
import { prev1 } from '../../themeProgress';

function Aperçu(){
  const navigate = useNavigate();
 /* useEffect(() => {
    next1();
},[]);*/
  return(
    <>
    <div style={{marginTop: '3.75%'}}>
     Aperçu
    </div>
    
    </>
  )
}

export {Aperçu};