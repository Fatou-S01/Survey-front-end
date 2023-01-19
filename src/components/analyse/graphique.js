import {React, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import "./analyse.css";
import {options,data} from "./functions"
import { Bar,Pie ,Line} from 'react-chartjs-2';

function ButtonForChangesGraphType(props){
  return(<div>
    <button  onClick = {()=> props.changeGraphType('HorizontalBar')} >BarreHorizontal{`${props.graphType}`}</button><button  onClick = {()=> props.changeGraphType('Pie')}>Circulaire</button ><button  onClick = {()=> props.changeGraphType('Line')}>Courbe</button><button  onClick = {()=> props.changeGraphType('Bar')}>Barre</button>
    </div>)
}
  
function Graphique(props){

const [graphType,changeGraphType] = useState("Bar")

if (graphType == 'Bar') {
  return (
    <div className='graph'>
      <Bar options={options} data={data} />
      <ButtonForChangesGraphType changeGraphType = {changeGraphType} graphType={graphType}/> 
    </div>

    )
}
else if (graphType == 'Pie') {
  return (
    <div className='graph1'>
      <Pie data={data} options={options}/>
      <ButtonForChangesGraphType changeGraphType = {changeGraphType} graphType={graphType}/> 

    </div>
    )
}
else if (graphType == 'Line') {
  return (
    <div className='graph'>
      <Line options={options} data={data} />
      <ButtonForChangesGraphType changeGraphType = {changeGraphType} graphType={graphType}/> 

    </div>
    )
}
else if (graphType == 'HorizontalBar') {
  const options1 = {
    indexAxis: 'x',
    responsive:true,
    legend:
    {
        display: false
    }
    };
  return (
    <div className='graph'>
      <Bar options={options1} data={data} />
      <ButtonForChangesGraphType changeGraphType = {changeGraphType} graphType={graphType}/> 

    </div>
    )
}

}

export {Graphique};