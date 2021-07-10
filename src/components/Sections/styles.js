import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	main: {
		margin: [[0, 15]],
	},
	toolbar: theme.mixins.toolbar,
	gridContainer: {
		maxWidth: 1300,
		'@media only screen and (min-width: 1024px)': {
			maxWidth: 800,
			margin: [[0, 'auto']],
		},
	},
	gridItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	sectionHeader: {
		textAlign: 'center',
		fontFamily: 'OPTIVenus',
		fontSize: '1rem',
		fontWeight: 'bolder',
	},
}));
