import React from 'react';
import '../question/question.css';
import './CSS/typeQuestion.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

var numberO = 0;
function MultipleChoice({value, optionValue1, optionValue2,style}){
  const [option_item, SetOption_item] = React.useState([]);
  const [choice_value, SetChoice_value] = React.useState([]);
  const [option1_value, SetOption1_value] = React.useState([]);
  const [option2_value, SetOption2_value] = React.useState([]);

 /* const AddOption = () => {
    const test = numberO + 1;
    SetOption_item([...option_item,test]);
  }*/
  return(
    <>
    <div style ={style}>
    <p >{value}</p>
    <FormControl>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
  >
    <FormControlLabel value={option1_value} control={<Radio />} label={optionValue1} />
    <FormControlLabel value={option2_value} control={<Radio />} label={optionValue2} />
  </RadioGroup>
</FormControl>
</div>
    </>
  )
}
function Option(){

  return(
    <>
    <input placeholder='Option de réponse' style = {{marginTop: '7px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
    </>
  )
}
export {MultipleChoice, Option}