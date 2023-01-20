import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./analyse.css";
import {Graphique} from "./graphique";
import { TableauResultat } from './tableauResultats';
import { TableauStatistique } from './tableauStatistique';

function AnalyseGraphique(){
    const params = useParams()
    const datas = [
        {
            "id_question":1,
            "intitule_question": "Choisis ta couleur preferee parmi celles donnees",
            "type_question":'checkbox',
            "reponses":{"rose":5,"vert":2,"orange":0},
           
        },
        {
            "id_question": 2,
            "intitule_question": "Quel est ton sexe",
            "type_question":'checkbox',
            "reponses":{"femme":4,"homme":7},
      
        },] //A RETROUVER AVEC AXIOS EN UTILISANT L'ID DU SONDAGE  params.id_sondage
    return (<div className='analyse'>
    {datas.map( (question,index)=> <p key={question.id_question} className="mb-5 row">
        <div className='col'>
        <h4 className='mb-3'>{index +1}-  {question.intitule_question}</h4>
        <Graphique datasets={question}/>
        </div>
        <div className='col my-auto'>
        <TableauResultat datasets = {question}/>
        <TableauStatistique datasets = {question}/>
        </div>
    </p>)}
        
 
    </div>)

}

export {AnalyseGraphique};