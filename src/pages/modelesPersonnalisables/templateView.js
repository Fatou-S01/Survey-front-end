import {React,useEffect,useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import './CSS/modeles.css';
import survey1 from '../../assets/survey1.png';
import axios  from 'axios';
import Grid from '@mui/material/Grid';
import {useQuery} from "@tanstack/react-query";


function TemplateView(){
  
  const navigate1 = useNavigate();
  const params = useParams();
  const [modele, setModele] = useState("")

  const { data,isLoading} = useQuery(["modele"], () => {
    return axios.get(`http://127.0.0.1:4030/api/modelePersonnalisable/${params.id_template}`).then((response) => 
       (response.data).modelePersonnalisable
  );
});
if(isLoading){
    return <h3>Loading</h3>;
}


const saveSondage = () => {
  axios.post("http://127.0.0.1:4030/api/sondages/createSondage",
    { 
        userId: params.id_user,
        titreSondage: params.titre_template,
        description: data.description,
        statutSondage: 'private',
    }).then((response) => {
      const test = response.data
      navigate1(`/Creer_sondage/${params.id_user}/${params.titre_template}/${test.createdSondage._id}`)

    });
    
   /* navigate1(`/Creer_sondage/${params.id_user}/${params.titre_template}/${modele.statutSondage}`);*/
}

  return(
    <>

      
   <Grid container style={{height:'300px'}} >
       
        <Grid item  xs={6}>
        <div id='text_template'>
        <h1 id='titre_template'>{params.titre_template}</h1>
        <div id='text_card'>{data.description}</div>
        </div>
        <div id='bouton_green'>
        <button className='bouton_green_use' onClick={saveSondage}>Use this template</button>
        <button className='bouton_green_prev' onClick={() => {navigate1(`/modeles_perso/preview/${params.titre_template}/1/${params.id_template}/${params.id_user}`)}}>Preview template</button>
       
        </div>
    
        </Grid>
        <Grid item xs={6}  style={{ height:'100%'}}>
        <div id='image_template' >
            <img src = {survey1} id = 'image_tem'></img>
            </div>
        </Grid>
    </Grid>

  

      

    
    </>
  )
}

export {TemplateView};