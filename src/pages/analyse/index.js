import React from 'react';
import { ProgressBar } from '../../components/progressBar';
import { Navbar } from '../../components/navbar';
import { AnalyseGraphique } from '../../components/analyse/index';

function Analyse(){
    return(
    <>
    <Navbar/>
    <ProgressBar/> 
    <AnalyseGraphique />
    </>
    )
}
export default Analyse;