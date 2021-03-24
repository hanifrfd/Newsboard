import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
}   from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(5, 14)
    },
    carousel: {
      height: '100vh',
      backgroundColor: 'silver',
      backgroundImage: "url('https://images8.alphacoders.com/939/thumb-1920-939716.png')",
      backgroundSize: 'cover'
    },    
  }));

export default function Carousel() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.carousel}>

            </div>
        </div>
    )
}
