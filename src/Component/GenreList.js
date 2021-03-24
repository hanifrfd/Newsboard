import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Typography, Divider
}   from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(0, 14)
    },    
    genreList: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(2, 0)
    }
  }));

export default function GenreList() {
    const classes = useStyles();
    const genres = ['General', 'Entertainment', 'Business', 'Health', 'Science', 'Sports', 'Technology']
    return (                    
        <div className={classes.root}>                
            
                <Grid container className={classes.genreList}>
                    {
                        genres.map( genres =>
                            <Grid item>
                                <Typography variant="body1" key={genres}>
                                    {genres}
                                </Typography>
                            </Grid>
                        )
                    }
                </Grid>            
            <Divider />
        </div>
    )
}
