import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		alignSelf: 'center',
		backgroundColor: '#fff',
		padding: theme.spacing(3),
		textAlign: '-webkit-center',
		width: '100%',
		maxWidth: 600,
		marginTop: 20,
		'@media only screen and (min-width: 1024px)': { maxWidth: 800 },
	},
	root: { flexGrow: 1 },
}));
