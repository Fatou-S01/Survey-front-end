import React from 'react';
import { ProgressBar } from '../../components/progressBar';
import { Navbar } from '../../components/navbar';
import { Graphique } from '../../components/analyse';

function Analyse(){
    return(
    <>
    <Navbar/>
    <Graphique/>
    <ProgressBar/>
    </>
    )
}
export default Analyse;