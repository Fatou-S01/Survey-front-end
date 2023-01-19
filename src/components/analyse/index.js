import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./analyse.css";
import {Graphique} from "./graphique";


function AnalyseGraphique(){
    const nQuestions = [{id:1,intitule:'quel est votre age'},{id:2,intitule:'quel est votre prenom'},{id:3,intitule:'quellessont vos couleurs preferees'}];
    return <div>
    {nQuestions.map( question=> <p key={question.id}>
        <div>
        <Graphique/>
        </div>
    </p>)}
    </div>
}

export {AnalyseGraphique};