import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Typography, Divider
}   from '@material-ui/core'

import HotNewsItem from './HotNewsItem'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(0, 14),
      textAlign: 'left'
    },    
    
    genreList: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2, 0)
    },
    title: {
        padding: theme.spacing(3, 0)
    },
    hotNews: {
        marginBottom: theme.spacing(4)
    }
  }));

  export default function HotNews() {
    const classes = useStyles();
    const datas = [
        'https://images8.alphacoders.com/939/thumb-1920-939716.png', 
        'India will reportedly introduce bill to make owning cryptocurrency...', 
        'The Verge', 
        'India’s legislature is reportedly considering a near-total ban on private cryptocurrencies like Bitcoin or Ethereum, including owning the virtual currency. The governme...'
    ];
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>HOT NEWS</Typography>
            <Grid container justify="space-between" className={classes.hotNews}>
                <Grid item className={classes.hotNewsItem}>
                    <HotNewsItem backgroundImage={datas[0]}></HotNewsItem>
                </Grid>
                <Grid item className={classes.hotNewsItem}>
                    <HotNewsItem backgroundImage={datas[0]}></HotNewsItem>
                </Grid>
                <Grid item className={classes.hotNewsItem}>
                    <HotNewsItem backgroundImage={datas[0]}></HotNewsItem>
                </Grid>
                <Grid item className={classes.hotNewsItem}>
                    <HotNewsItem backgroundImage={datas[0]}></HotNewsItem>
                </Grid>
                <Grid item className={classes.hotNewsItem}>
                    <HotNewsItem backgroundImage={datas[0]}></HotNewsItem>
                </Grid>                
            </Grid>
            <Divider />
        </div>
    )
}
