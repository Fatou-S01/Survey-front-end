import {React, useState } from 'react';

function TableauResultat(props){
    const lignes = Object.entries(props.datasets.reponses)
    return(<div className='tableResultat'>
		<table class="table table-striped table-bordered
									 table-sm">
			<thead>
				<tr>
					<th> Choix Reponses</th>
					<th> Reponses</th>
				</tr>
			</thead>
			<tbody>
            {lignes.map( ligne => 
                <tr key={ligne[0]}>
					<td> {ligne[0]}</td>
					<td> {ligne[1]}</td>
				</tr>
                )}
				
			</tbody>
   	</table>
	</div>
    )
}

export {TableauResultat}