import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

export default function DateLive({ props }) {
    const [selectedDate, setSelectedDate] = React.useState();
    const classes = useStyles();

    const handleDateChange = date => {
        console.log( date )
        setSelectedDate(date);
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

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            style={{marginTop:"15px"}}
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            label="mm/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

