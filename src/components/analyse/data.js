import {React, useState } from 'react';



function formatData(data){
    const nReponses = []
    const optionsReponses = []
    for (let option of data[1]){
        optionsReponses.push(Object.keys(option)[0])
        nReponses.push(Object.values(option)[0])
    }
    return  {optionsReponses,nReponses}
    }

export {formatData}



