import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
	const classes = useStyles();

	return (
		<div className={classes.loader}>
			<CircularProgress className={classes.spinner} />
		</div>
	);
};

export default Loader;
