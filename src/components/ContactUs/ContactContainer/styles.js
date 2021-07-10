import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	main: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: [[30]],
		'@media only screen and (min-width: 1024px)': {
			marginBottom: [[55]],
		},
	},
	title: {
		fontFamily: 'Montserrat Medium',
		fontSize: '1rem',
	},
	bodyText: {
		fontFamily: 'Montserrat Medium',
		fontSize: '1rem',
		opacity: 0.7,
	},
}));
