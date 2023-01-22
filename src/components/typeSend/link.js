import {React } from 'react';
import TextField from '@mui/material/TextField';
import {useNavigate,useParams} from 'react-router-dom';

function Link1({link}){
  const navigate = useNavigate();
  return(
    <>
    <div>
    <h4>Lien</h4>
    </div>
    <TextField id="standard-basic" variant="standard"style= {{width: '80%'}} defaultValue = {link} />
    </>
  )
}

export {Link1};