import React from 'react';
import { Slider1 } from "../typeQuestion/slider";
import './CSS/typeQuestion.css';
import '../question/question.css';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import { Rate1 } from "../typeQuestion/rate";
import { MultipleChoice } from "../typeQuestion/multiplechoice";
import { DatePicker1 } from "../typeQuestion/datepicker";
import { DatePicker, Space } from 'antd';
import { Checkbox } from "../typeQuestion/checkbox";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ZoneTexte } from "../typeQuestion/zoneTexte";
import { Option } from '../typeQuestion/multiplechoice';
import { FaTrash } from "react-icons/fa";
import { FaRegEdit} from "react-icons/fa";


var numberO = 0;
function NewQuestion(){
  const [type, setType] = React.useState('zoneTexte');
  const [active, setActive] = React.useState(0);
  const [input_value, SetInput_value] = React.useState("");
  const [slider_value, SetSlider_value] = React.useState("");
  const [rate_value, setRateValue] = React.useState("");
  const [date_value, setDateValue] = React.useState("");
  const [value1, setValue] = React.useState(2);

  /* Multiple Choice */
  const [option_item, SetOption_item] = React.useState([]);
  const [choice_value, SetChoice_value] = React.useState([]);
  const [option1_value, SetOption1_value] = React.useState([]);
  const [option2_value, SetOption2_value] = React.useState([]);

  /*Modifier*/
  const [update, setUpdate] = React.useState(0);

  const AddOption = () => {
    const test = numberO + 1;
    SetOption_item([...option_item,test]);
  }

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return(
    <>
    {
      active == 0 ? <div className='div_input'>
      {type == 'zoneTexte' ? <input className='question' value={input_value} onChange={(e) => {SetInput_value(e.target.value)}}></input> :  type == 'rate' ? 
      <>
      <div className='type'>
      <input className='question' value={rate_value} onChange={(e) => {setRateValue(e.target.value)}}></input>
      <Rating
          name="simple-controlled"
          value={value1}
          onChange={(event, newValue) => {
            setValue(newValue);}}
          sx = {{marginTop:'10px', color: '#2a9e9e'}}
        />
        
        </div>
      </> : type == 'slider' ? <>
    <div className='type'>
    <input className='question' value={slider_value} onChange={(e) => {SetSlider_value(e.target.value)}} ></input>
    <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" size= 'large' sx = {{marginTop:'10px', color: '#2a9e9e'}}/>
    </div>
    </> : type == "datepicker" ? 
        <>
        <div className='type'>
          <input className='question' value={date_value} onChange={(e) => {setDateValue(e.target.value)}}></input>
          <Space direction="vertical">
        <DatePicker/>
      </Space>
      </div>
        </> : 
        <>
        <div className='type'>
        <input className='question' value={choice_value} onChange={(e) => {SetChoice_value(e.target.value)}}></input>
        <input placeholder='Option de réponse' value={option1_value} onChange={(e) => {SetOption1_value(e.target.value)}}style = {{marginTop: '20px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        <input placeholder='Option de réponse' value={option2_value} onChange={(e) => {SetOption2_value(e.target.value)}}style = {{marginTop: '7px',width:'40%', height:'25px', borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid', borderRadius:'5px'}}></input>
        {
          option_item.map((index) =>  <Option key = {index}/>)
        }
        <button onClick={AddOption} style={{width: '20%',marginTop: '7px',borderColor: '#2a9e9e', borderWidth: '1px', borderStyle: 'solid',borderRadius:"30px", color:"#2a9e9e", backgroundColor: "#f5f5f5"}}>Plus d'option</button>
        </div>
        </>}
      <div >
          <FormControl sx={{ height: '10px'}} >
            <InputLabel id="demo-simple-select-label" sx={{ width: '500px'}} ></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="TypeQuestion"
              onChange={handleChange}
              sx={{ height: '1.9rem',width: '190px',backgroundColor:'#2a9e9e', color:'#fff',borderColor:'#2a9e9e' }}
            >
              <MenuItem value={'multipleChoice'}>Multiple choice</MenuItem>
              <MenuItem value={'checkbox'}>Checkbox</MenuItem>
              <MenuItem value={'zoneTexte'}>Zone de texte</MenuItem>
              <MenuItem value={'datepicker'}>Date</MenuItem>
              <MenuItem value={'rate'}>Rate</MenuItem>
              <MenuItem value={'slider'}>Slider</MenuItem>
            </Select>
          </FormControl>
     

    </div>
    <div style= {{marginTop: '40px', marginRight: '10px'}}>
    <button onClick={() => {setActive(1)}} style= {{color: '#2a9e9e', backgroundColor: '#fff', borderStyle: 'none',borderRadius: '20px', height: '25px'}}>Enregistrer</button>
    </div>
    
    </div>
    : (active == 1 && type == 'zoneTexte') ? <><ZoneTexte value={input_value} style={{display: update == 1 ? "none": "visible"}}/>
    <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/>
    </>: (active == 1 && type == 'slider') ? 
    <><Slider1 value={slider_value} style={{display: update == 1 ? "none": "visible"}}/>
     <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:(active == 1 && type == 'rate') ?
    <><Rate1 value={rate_value} style={{display: update == 1 ? "none": "visible"}}/> 
   <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:(active == 1 && type == 'datepicker') ?
    <><DatePicker1 value={date_value} style={{display: update == 1 ? "none": "visible"}}/>
     <FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:(active == 1 && type == 'multipleChoice') ?
    <><MultipleChoice style={{display: update == 1 ? "none": "visible"}} value={choice_value} optionValue1 = {option1_value} optionValue2={option2_value}/>
<FaRegEdit onClick={() => {setActive(0)}} style={{display: update == 1 ? "none": "visible", color:'#333',marginTop:'10px'}} />
    <FaTrash onClick={() => {setUpdate(1)}} style={{display: update == 1 ? "none": "visible",color:'#333',marginLeft: '6px',marginTop:'10px'}}/></>:
<></>
    }
    </>
  )
}
export {NewQuestion}