import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: [[0, 'auto', 46, 'auto']],
		padding: [[10]],
		maxWidth: 600,
		'@media only screen and (min-width: 1024px)': {
			maxWidth: 800,
			padding: [[0]],
		},
	},
	textField: {
		marginBottom: [[35]],
	},
	button: {
		display: 'flex',
		justifyContent: 'flex-end',
		textTransform: 'capitalize',
		textDecoration: 'underline',
	},
}));
