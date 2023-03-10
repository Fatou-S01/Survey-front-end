import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import { SignIn } from '../../pages/login/signIn';
import { SignUp } from '../../pages/login/signUp';
import { Accueil } from '../../pages/accueil';
import { Welcome } from '../../pages/welcome';
import Sondage from '../../pages/sondage/creerSondagee';

function Routage() {
    return( 
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Accueil/>}/>
          <Route path='/welcome/:id_user' element = {<Welcome/>}/>
          <Route path='/inscription' element = {<SignUp/>}/>
          <Route path='/connexion' element = {<SignIn/>}/>
          <Route path='/Creer_sondage/:id_user/:titre_sondage' element = {<Sondage/>}/>
          
          
          
        </Routes>
      </BrowserRouter>
      
    );
}
export {Routage}