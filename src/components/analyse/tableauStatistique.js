import {React, useState } from 'react';

function TableauStatistique(props){
    //const datas = props.datasets.reponses
    return(<div className='tableResultat'>
		<table class="table table-striped 
									 table-sm">
			<thead>
				<tr>
					<th> Statistique</th>
                    <th></th><th></th><th></th><th></th>
				</tr>
			</thead>
			<tbody>
            <tr >
					<td className='text-center'><p>Maximum</p> <p>15</p></td>
					<td className='text-center'><p>Minimum</p> <p>15</p> </td>
                    <td className='text-center'><p>Mediane</p> <p>15</p> </td>
                    <td className='text-center'><p>Moyenne</p> <p>15</p> </td>
                    <td className='text-center'> <p>Ecart_type</p> <p>15</p></td>
				</tr>
				
			</tbody>
   	</table>
	</div>
    )
}

export {TableauStatistique}