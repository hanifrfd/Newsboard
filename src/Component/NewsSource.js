import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Typography, Divider
}   from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 14)
    },        
  }));

export default function NewsSource() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6">NEWS SOURCE</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="body1">CNN</Typography>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">CNN</Typography>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">CNN</Typography>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">CNN</Typography>                            
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">CNN</Typography>                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
