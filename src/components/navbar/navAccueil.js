import React from 'react';
import $ from 'jquery';
import "./navbar.css";
import { useLoaderData, useLocation, useNavigate,Link } from 'react-router-dom';



function NavbarAccueil(props){

  $(document).ready(function(){
    $('.link').click(function(){
      /*$(this).css({'color':'#2A9E9E','border-bottom':"solid","padding-bootom":"0rem"});*/
      $('.link').removeClass('focus1'); 
      $(this).addClass('focus1'); 
      });
    

    
  });
    return(
    <>
    
      <nav className="nav">
        <a href="/" className="logo">
          <h1 className="text" ><i id='logo_1' className='logo_2'>FaKi</i><i className='logo2'>Survey</i></h1>
        </a>

        <div className="nav__link hide">
          <Link  className='link focus1'>Accueil</Link>
          <Link  className='link' to = '/inscription'>Créer sondage</Link>
          <Link className='link'>Répondre à un sondage</Link>
         
        </div>
            <a href="/connexion" class="btn">Connexion</a>
            <a href="/inscription" class="btn ">Inscription</a>
      </nav>

    </>
    );
}
export{NavbarAccueil};