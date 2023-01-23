import {React,useRef,useState} from 'react';
import { ProgressBar } from '../../components/progressBar';
import { Navbar } from '../../components/navbar';
import { AnalyseGraphique } from '../../components/analyse/index';
import { jsPDF } from 'jspdf';

function Analyse(){
    const pdfRef = useRef(null);
    const handleDownload = () => {
        const content = pdfRef.current;
        const doc = new jsPDF();
        doc.html(content, {
            callback: function (doc) {
                doc.save('sample.pdf');
            },
            width:200,
            windowWidth:1000
        });
    };
    return(
    <>
    <Navbar/>
    <ProgressBar/> 
    <div ref={pdfRef}> <AnalyseGraphique /></div>
    <button onClick={handleDownload}>Download</button>
    </>
    )
}
export default Analyse;