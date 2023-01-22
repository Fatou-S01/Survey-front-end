import {React, useContext}  from 'react';

import {
    Box,
  Button,
   Form,
    FormField,
   Footer,
   TextArea,
  Header,
    Heading,
   StarRating,
   RadioButtonGroup,
   ResponsiveContext,
} from 'grommet'

function AnswerSondage(){
  const size = useContext(ResponsiveContext);
  return(
    <>
   

    <Box pad="large" gap="medium" width="medium">
      <Form
        onSubmit={({ value }) => console.log('Submit', value)}
        validate="submit"
        kind="survey"
      >
        <FormField
          htmlFor="star-rating"
          name="rating"
          label="Was this content helpful?"
        >
          <StarRating id="star-rating" name="rating" />
        </FormField>
        <FormField
          label="What would have improved your experience"
          htmlFor="experience"
          name="experience"
        >
          <RadioButtonGroup
            options={['Better UI', 'Accessibility', 'Clear Label', 'Nothing']}
            id="experience"
            name="experience"
          />
        </FormField>
        <FormField label="Comments" htmlFor="comments" name="comments">
          <TextArea id="comments" name="comments" />
        </FormField>
        <Footer
          align={!['xsmall', 'small'].includes(size) ? 'start' : undefined}
          margin={{ top: 'medium', bottom: 'small' }}
        >
          <Button label="Submit Feedback" primary type="submit" />
        </Footer>
      </Form>
    </Box>

    </>
  )
}
export {AnswerSondage}