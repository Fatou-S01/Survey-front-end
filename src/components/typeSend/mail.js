import {React ,useRef} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';


function Mail(){
  const navigate = useNavigate();
   /*send email*/
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_307najz', 'template_0f8mxkn', form.current, 'KPNMwvIvC07cFfpJi',{to_name: "Modou",
     message: "Fatou",}
   );

   };
  return(
    <>
    <div>
    <h4>Email</h4>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>
    <form ref={form} onSubmit={sendEmail}>
    <TextField id="standard-basic" label="A" variant="standard"style= {{width: '80%'}} />
    <TextField id="standard-basic" label="Objet" variant="standard" style= {{width: '80%'}}  />
    <TextField id="standard-basic" label="Message" variant="standard" style= {{width: '80%'}}  />
    <input type="submit" value="Send" />
    </form>
    </div>
    
    </>
  )
}

export {Mail};