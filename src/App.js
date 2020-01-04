import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RadioLive from './LiveFormElements/RadioLive';
import TextOrNumLive  from './LiveFormElements/TextOrNumLive';
import RatingLive  from './LiveFormElements/RatingLive';
import DateLive  from './LiveFormElements/DateLive';

const radioProps = {
  type: "radio",
  id: 23655,
  mainQuestion: "What is Your Gender",
  subQuestion: {
    active: true,
    question: "As per birth certificate"
  },
  radios: ["Male", "Female", "Other"],
  order: 1
}

const textNumProps = {
  type: "textnum",
  id: 548,
  mainQuestion: "What is Your First Name",
  subQuestion: {
    active: true,
    question: "Government First Name"
  },
  isText:true,
  restrictions:"Under 100 Words",
  order: 2
}

const ratingProps = {
  type: "rating",
  id: 4000,
  mainQuestion: "How would you rate our customer service",
  subQuestion: {
    active: true,
    question: "Please be honest, its anonymous"
  },
  numStars:5,
  order: 3
}

const dateProps = {
  type: "Date",
  id: 3561,
  mainQuestion: "Please Enter Your date of birth",
  subQuestion: {
    active: true,
    question: "As per your birth certificate"
  },
  order: 4
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
      < RadioLive props={radioProps} />
      <br/>
      < TextOrNumLive props={textNumProps} />
      <br/>
      < RatingLive props={ratingProps} /> 
      <br/>
      < DateLive props={dateProps} />
    </div>
  );
}
