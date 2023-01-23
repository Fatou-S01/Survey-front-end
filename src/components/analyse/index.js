import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./analyse.css";
import {Graphique} from "./graphique";
import { TableauResultat } from './tableauResultats';
import { TableauStatistique } from './tableauStatistique';
import {formatData} from './data'
import { AnalyseZoneTexte } from './analyseZoneTexte';


function AnalyseGraphique(){
    const params = useParams()
    const datas=[[
        {
            "id_question":1,
            "intitule_question": "Choisis ta couleur preferee parmi celles donnees?",
            "type_question":'checkbox',
           
        },
        [{"rose":5},{"vert":2},{"orange":0}]
    ],
        [{
            "id_question": 2,
            "intitule_question": "Quel est ton sexe?",
            "type_question":'zoneTexte',  
        },
        [`je m'appelle fama sarrUne phrase est constituée d'un ou plusieurs mots, de différentes natures et fonctions, reliés entre eux. Elle commence par une majuscule et se termine par une ponctuation forte (point final, point d'exclamation, point d'interrogation, points de suspension).`,`La phrase est organisée selon les règles de la grammaire. Elle a un sens, est porteuse d'un message. C'est l'unité minimale de communication.
        Les phrases sont classées selon leur modalité, c'est-à-dire selon l'attitude de l'énonciateur à l'égard de ce qu'il énonce. On distingue trois types de phrases, toutes pouvant être à la forme affirmative ou négative `]
    ]]//A RETROUVER AVEC AXIOS EN UTILISANT L'ID DU SONDAGE  params.id_sondage
    
    return (<div className='analyse'>
    {datas.map( (question,index)=> <p key={question[0].id_question} className="mb-5 row">
        <div className='col'>
        <h4 className='mb-3'>{index +1}-  {question[0].intitule_question}</h4>
        { question[0].type_question=='zoneTexte'? <><div>Reponses  {`(${question[1].length})`}</div><AnalyseZoneTexte datasets= {question[1].join('. ')}/></> : <><div>Reponses  {`(${formatData(question).nReponsesTot})`}</div>
        <Graphique datasets={question}/></> }
        </div>
        {question[0].type_question=='zoneTexte'?<></>: <div className='col my-auto'>
        <TableauResultat datasets = {question}/>
        <TableauStatistique datasets = {question}/>
        </div>}
       
    </p>)}
        
 
    </div>)

}

export {AnalyseGraphique};