import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import './CSS/login.css'


function SignUp(){
  const nav4 = useNavigate();
  const [user, SetUser] = useState("");
  const [first_name, SetFirst_name] = useState("");
  const [last_name, SetLast_name] = useState("");
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");
  const [domaine, SetDomaine] = useState("");
  const [username, SetUsername] = useState("");


 const handleSubmit = (event) => {
      event.preventDefault()
     /* axios.post("http://localhost:8000/api_user/",
      { 
          first_name: first_name,
          last_name: last_name,
          mail: mail,
          password: password,
          domaine:domaine,
          username: username,
      }).then((response) => {
        SetUser(response.data);

      });*/

      nav4('/connexion');

}

   /* useEffect(() => {
      const navbar = document.getElementsByClassName('Navbar');
      navbar[0].style.visibily='hidden';
    })*/

    return(
    <div style = {{marginTop: '2rem'}}>
      <div> <h2 className='sign_in' ><i id='logo2'>Faki</i><i id='logo1'>Survey</i></h2></div>
      <div className='sign_in'>
      <div className='sign_in1'>
      <form onSubmit={handleSubmit} className='form1' style = {{padding:'2rem'}}>
          <h3 style = {{textAlign: 'center'}}>Inscription</h3>
          <div style = {{display: 'flex', flexDirection: 'row'}}>

          <div style = {{display: 'flex', flexDirection: 'column'}}>
              <label>Prénom</label>
              <input required type='text'   value={last_name} onChange={(e) => SetLast_name(e.target.value)}/>
          </div>

          <div style = {{display: 'flex', flexDirection: 'column', marginLeft:'2rem'}}>
              <label>Nom</label>
              <input required type='text'  value={first_name} onChange={(e) => SetFirst_name(e.target.value)}/>
          </div>

          </div>
          <label className='label4'>Nom d'utilisateur</label>
          <input required type='text'  value={username} onChange={(e) => SetUsername(e.target.value)}/>
          <label className='label4'>Adresse mail</label>
          <input required type='text'  value={mail} onChange={(e) => SetMail(e.target.value)}/>
          <label className='label4'>Mot de passe</label>
          <input required type='password'  value={password} onChange={(e) => SetPassword(e.target.value)}/>
          <label className='label4'>Domaine</label>
          <input type='text'  value={domaine} onChange={(e) => SetDomaine(e.target.value)}/>
          <input type='submit' value='Inscription' id='login_button'/>

      </form>
      <div style = {{display: 'flex', flexDirection: 'row',marginLeft:'5%'}}>
          <p>Vous avez déjà un compte ?</p><Link style = {{color:'#2a9e9e'}} to = '/Connexion'>Connectez-vous ici</Link>
      </div>
      </div>
      </div>
    </div>
    );
}
export{SignUp};