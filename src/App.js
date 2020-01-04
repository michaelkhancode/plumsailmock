import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RadioLive from './LiveFormElements/RadioLive';
import TextOrNumLive  from './LiveFormElements/TextOrNumLive';
import RatingLive  from './LiveFormElements/RatingLive';
import DateLive  from './LiveFormElements/DateLive';


// Form Elements:
//   *Required Tag question
//   *Question 1, option for subtitle in italics for more context

//   Radio Button     ->  Question, minimum 2 radios
//                        Add more radios, swich to check all apply

//   Text/Num Input   ->  Question minimum 1 box, switch to small/large box
//                        Text or Numeric switch
//                        Numiric, with restrictions >=, <= etc..

//   Rating           ->  5 star default with option for 2 too 10, start symbol

//   Date             ->  Enter a date with a date picker

const useStyles = makeStyles({
  wrapSurvey: {
    margin:"auto",
    minWidth: 275,
    maxWidth: 700,
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapSurvey} >
      < RadioLive />
      <br/>
      < TextOrNumLive />
      <br/>
      < RatingLive /> 
      <br/>
      < DateLive />
      
    </div>
  );
}
