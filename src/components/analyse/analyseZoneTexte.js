import {React, useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import axios from "axios";




  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [30, 50]
  };
  const size = [1200, 400];
 


function AnalyseZoneTexte(props){
  const [words,changeWords] = useState({})
  const [nwords,changeNWords] = useState([])

  const handleSubmit = () =>
{
  axios.post('http://localhost:5000/worldCLoud', 
  { "reponses":props.datasets}
  ).then((res)=> {
      changeWords(res.data)
      changeNWords(Object.entries(res.data).map((e,index)=> {
        return {text:e[0],value:e[1]}
      }))
  });
  

}
 
  return (<div><div className='mb-2'>Veuillez choisir un des algorithmes suivants pour l'analyse de cette zone de texte</div>
    <button onClick={handleSubmit}>WORLDCLOUD </button>
        <ReactWordcloud
        options={options}
        size={size}
        words={nwords}
      />
    </div>)
}

export {AnalyseZoneTexte}