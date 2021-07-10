import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	main: {
		'@media only screen and (min-width: 1024px)': {
			display: 'flex',
			justifyContent: 'space-between',
			margin: [[0, 'auto']],
			maxWidth: 800,
		},
	},
	topTitle: {
		paddingTop: [['4em']],
	},
	title: {
		margin: [['2em', 0]],
		fontFamily: 'OPTIVenus',
		fontSize: '1rem',
	},
	rightContact: {
		margin: [[0, 'auto']],
		padding: [[10]],
		maxWidth: 600,
		'@media only screen and (min-width: 1024px)': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			maxWidth: 800,
			margin: 'initial',
			textAlign: 'right',
		},
	},
	phone: {
		textDecoration: 'none',
		color: 'inherit',
	},
}));
