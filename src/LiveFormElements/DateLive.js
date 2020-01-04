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

export default function MaterialUIPickers() {
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
                            {`${4}.`}
                        </Typography>
                    </div>
                    <div>
                        <Typography align="left" className={classes.maintitle} color="textPrimary">
                            Please Enter Your date of birth
                        </Typography>
                        <Typography align="left" className={classes.subtitle} color="textPrimary">
                            mm/dd/yyyy
                        </Typography>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
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

