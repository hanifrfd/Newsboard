import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
}   from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      width: 198,
      
    },    
    genreList: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(2, 0)
    },
    img: {
        height: 152,
        width: '100%',
        backgroundSize: 'cover',
    },
    title: {
        margin: theme.spacing(1,0),
        textAlign: 'left',
        fontWeight: 'bold',
    }
  }));

export default function HotNewsItem(props) {
    const classes = useStyles();
    const { backgroundImage } = props
    return (
        <div className={classes.root}>
            <img src={ backgroundImage } className={classes.img} alt="hot news" />
            <Typography variant="body2" className={classes.title}>
                India will reportedly introduce bill to make owning cryptocurrency...            
            </Typography>
            {/* <Grid container>
                <Grid item className={classes.img} style={{ backgroundImage }}></Grid>
            </Grid> */}
        </div>
    )
}
