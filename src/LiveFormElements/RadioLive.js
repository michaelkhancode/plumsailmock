import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({  
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
});

//   Radio Button     ->  Question, minimum 2 radios
//                        Add more radios, swich to check all apply

export default function RadioLive({ props }) {
    console.log(props)
    const classes = useStyles();

    //Radio Type state variables--------------
    const [value, setValue] = React.useState("");
    //Radio Button state--------------

    const handleChange = event => {
    console.log(event.target)
    setValue(event.target.value);
    };

    const radiosToRender = [];
    props.radios.forEach((label, i) => {
        radiosToRender.push(<FormControlLabel value={label} control={<Radio size="small" />} label={label} key={i} />)    
    });

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

                        <FormControl className={classes.formControl}>
                            <RadioGroup 
                                aria-label={String(props.id)}
                                name= {String(props.id)}
                                value={value} 
                                onChange={handleChange}
                            >
                                {radiosToRender}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
