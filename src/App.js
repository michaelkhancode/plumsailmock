import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RadioLive from './LiveFormElements/RadioLive';
import TextOrNumLive  from './LiveFormElements/TextOrNumLive';
import RatingLive  from './LiveFormElements/RatingLive';
import DateLive  from './LiveFormElements/DateLive';

const radio = {
  type: "radio",
  id: 23655,
  radios: ["Male", "Female", "Other"],
  mainQuestion: "What is Your Gender",
  subQuestion: {
    active: true,
    question: "As per birth certificate"
  },
  order: 1
}

const useStyles = makeStyles({
  wrapSurvey: {
    margin:"auto",
    minWidth: 275,
    maxWidth: 700,
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapSurvey} >
      < RadioLive props={radio} />
      <br/>
      < TextOrNumLive />
      <br/>
      < RatingLive /> 
      <br/>
      < DateLive />
    </div>
  );
}
