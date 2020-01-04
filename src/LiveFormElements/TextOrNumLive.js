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

export default function TextOrNumLive() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = event => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  return (
    <div>
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.flexWrapper} >
                    <div className={classes.numbering}>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                            {`${2}.`}
                        </Typography>
                    </div>
                    <div>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                            What is First Name 
                        </Typography>
                        <Typography align="left" className={classes.subtitle} color="textPrimary">
                            Government first name
                        </Typography>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                            id="standard-multiline-flexible"
                            label="Under 150 Words"
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


