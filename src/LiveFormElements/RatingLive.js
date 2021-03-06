import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
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

//   Rating           ->  5 star default with option for 2 too 10, start symbol

export default function RatingLive({props}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

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

                        <Box component="fieldset"  borderColor="transparent">
                            <Rating
                            max={props.numStars}
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                console.log(newValue)
                                setValue(newValue);
                            }}
                            />
                        </Box>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}


