import {React, useContext}  from 'react';

import {
  Button,
   Form,
    FormField,
   Footer,
   StarRating,
   RadioButtonGroup,
   ResponsiveContext,
} from 'grommet';
import { TextInput } from 'grommet';
import { RangeInput } from "grommet";
import { DateInput } from 'grommet';
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';
import { useParams } from 'react-router';
import '../../components/question/question.css';


function AnswerSondage(){
  const params = useParams();
  
  const size = useContext(ResponsiveContext);
  const { data,isLoading} = useQuery(["question"], () => {
    return axios.get(`http://127.0.0.1:4030/api/questions/questionsSondage/${params.id_sondage}`).then((response) => 
        response.data.question
  );
  });
  if(isLoading){
    return <h3>Loading</h3>;
  }

  return(
    <>
   

   <div> <h2 className='sign_in' ><i id='logo228' style= {{fontSize:'25px'}}>Faki</i><i id='logo118' style= {{fontSize:'25px'}}>Survey</i></h2></div>
    <div style = {{textAlign:'center'}}>Description: {'data.description'}</div>
    <div style={{display: 'flex', justifyContent:'center',marginTop:'15px'}}>
      <Form
        onSubmit={({ value }) => {
          console.log(value);
          const question = (data).filter( question_value => Object.keys(value).includes(question_value.intituleQuestion));
          if(question.length != 0) {
            for(let i = 0; i < question.length; i++) {
              axios.post("http://localhost:4030/api/reponseQuestion/createReponseQuestion",
            { 
              intituleReponse: value[question[i].intituleQuestion],
              questionId: question[i]._id
            }
            )
            }
          }

        }}
        validate="submit"
        kind="survey"
      >{
        Object.entries(data).map(([key,value]) => {
          if(value.typeQuestion == 'zoneTexte'){
          return <FormField
          htmlFor="zoneTexte"
          name={value.intituleQuestion}
          label={value.intituleQuestion}
        >  
          <TextInput style = {{  width: '28rem',
  height: '1.8rem',borderStyle:'solid', borderWidth:'1px',borderColor:'#2A9E9E', borderRadius:'5px'

}} id="zoneTexte" name={value.intituleQuestion} aria-label="Input Text"/>
        </FormField>
      }
      else if(value.typeQuestion == 'slider'){
        return <> 
         <FormField
          htmlFor="slider"
          name={value.intituleQuestion}
          label={value.intituleQuestion}
         
        >
          <RangeInput id="slider" name={value.intituleQuestion} color="skyblue"/>
        </FormField>
       
        </>
      }
      else if(value.typeQuestion == 'rate'){
        return <>
         <FormField
          htmlFor="star-rating"
          name={value.intituleQuestion}
          label={value.intituleQuestion}
        >
            <StarRating id="star-rating" name={value.intituleQuestion} />
        </FormField>
     </>
      }
      else if(value.typeQuestion == 'datepicker'){
        return    <>
        <FormField
          htmlFor="datepicker"
          name={value.intituleQuestion}
          label={value.intituleQuestion}
        >
        <DateInput format="dd/mm/yyyy" id="datepicker" name={value.intituleQuestion} />
        </FormField>
    
        </>
      }
      else{
        return             <FormField
        label={value.intituleQuestion}
        htmlFor="choice"
        name={value.intituleQuestion}
      >
        <RadioButtonGroup
          options={['Better UI', 'Accessibility']}
          id="choice"
          name={value.intituleQuestion}
        />
      </FormField>
      }
      })
      }
        <Footer
          align={!['xsmall', 'small'].includes(size) ? 'start' : undefined}
          margin={{ top: 'medium', bottom: 'small' }}
        >
           <div style={{ marginTop:'15px', width:'100%'}}>
          <Button label="Enregistrer" primary type="submit"  style= {{float:'right',color: '#fff', backgroundColor: '#2a9e9e', borderStyle: 'solid',borderRadius: '6px',borderColor:'#2a9e9e', height: '40px',width:'150px'}}/>
          </div>
        </Footer>
      </Form>
    </div>

    </>
  )
}
export {AnswerSondage}