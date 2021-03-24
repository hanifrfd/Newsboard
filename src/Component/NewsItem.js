import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Typography
}   from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      margin : theme.spacing(3,0)
    },    
    newsList: {        
        
    },
    newsRoot: {
        display: 'flex',
        flexDirection: 'row',        
    },
    newsImg: {
        height: 195,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    newsContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'left',
        marginLeft: theme.spacing(3)
    },
    title: {
        fontWeight: 'bold',
    },
    source:{
        color: 'cyan',
    }
  }));

export default function NewsItem(props) {
    const classes = useStyles(props);
    const { backgroundImage } = props;
    return (
        <div className={classes.root}>
            <Grid container className={classes.newsRoot}>
                <Grid item xs={4} className={classes.newsImg} style={{ backgroundImage }}></Grid>
                <Grid item xs={7}className={classes.newsContent}>
                    <Typography variant="h5" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.source}>
                        {props.source}
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                        {props.description}
                    </Typography>
                </Grid>
            </Grid>            
        </div>
    )
}
