import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Typography, Divider
}   from '@material-ui/core'
import NewsItem from './NewsItem'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(0, 14)
    },    
    morePlease: {        
      padding: theme.spacing(2, 0) ,
      fontWeight: 'bold',
      color: 'blue'
      //   textAlign: 'left' 
    }
  }));

export default function NewsList() {
    const classes = useStyles();
    const datas = [
        'url("https://images8.alphacoders.com/939/thumb-1920-939716.png")', 
        'India will reportedly introduce bill to make owning cryptocurrency...', 
        'The Verge', 
        'India’s legislature is reportedly considering a near-total ban on private cryptocurrencies like Bitcoin or Ethereum, including owning the virtual currency. The governme...'
    ];
    return (
        <div className={classes.root}>
            <div className={classes.newsList}>
                <Grid container>
                    <Grid item xs={10}>
                        <NewsItem backgroundImage={datas[0]} title={datas[1]} source={datas[2]} description={datas[3]}></NewsItem>
                        <NewsItem backgroundImage={datas[0]} title={datas[1]} source={datas[2]} description={datas[3]}></NewsItem>
                        <NewsItem backgroundImage={datas[0]} title={datas[1]} source={datas[2]} description={datas[3]}></NewsItem>
                        <Typography variant="h6" className={classes.morePlease}>More Please...</Typography>
                    </Grid>
                </Grid>
            </div>
            <Divider />
        </div>
    )
}
