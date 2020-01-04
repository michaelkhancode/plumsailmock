import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
  maintitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    fontStyle: "italic",
  },
  flexWrapper: {
      display:"flex",
  },
  numbering: {
    marginRight: 3,
  }
}));

//   Text/Num Input   ->  Question minimum 1 box, switch to small/large box
//                        Text or Numeric switch
//                        Numiric, with restrictions >=, <= etc..

var isNumberReg = /^\d+$/;

export default function TextOrNumLive({props}) {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = event => {
    if ( props.isText ){
      setValue(event.target.value);
    } 
    else {
      if (isNumberReg.test(event.target.value)){
        setValue(event.target.value)
      }
    }
  };

  return (
    <div>
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.flexWrapper} >
                    <div className={classes.numbering}>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                          {`${props.order}.`}
                        </Typography>
                    </div>
                    <div>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                          {`${props.mainQuestion}`}
                        </Typography>

                        { props.subQuestion.active &&
                        <Typography align="left" className={classes.subtitle} color="textPrimary">
                            {`${props.subQuestion.question}`}
                        </Typography>
                        }

                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                            id="standard-multiline-flexible"
                            label={props.restrictions}
                            multiline
                            rowsMax= "4"
                            value={value}
                            onChange={handleChange}
                            />
                        </form>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}


