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

export default function RatingLive() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <div>
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.flexWrapper} >
                    <div className={classes.numbering}>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                            {`${3}.`}
                        </Typography>
                    </div>
                    <div>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                            How would you rate your experience
                        </Typography>
                        <Typography align="left" className={classes.subtitle} color="textPrimary">
                            Dont be afraid to be honest !
                        </Typography>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating
                            max={10}
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


