// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import theaterimage from '../theaterimage.jpg';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Showing(props: {onSelected: () => any}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={theaterimage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Showing
                    </Typography>
                    <Typography variant="body2" gutterBottom color="textPrimary" component="p">
                        5/23/2021 5:00PM
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus dui.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={props.onSelected} size="small" variant="contained" color="primary">
                    Select
                </Button>
            </CardActions>
        </Card>
    );
}
