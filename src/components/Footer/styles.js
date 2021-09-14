import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	footer: {
		borderTop: '1px solid #000',
		padding: [[0, 15]],
		marginTop: [['auto']],
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: [[0, 'auto']],
		maxWidth: 1300,
	},
	list: {
		marginBottom: 10,
	},
	header: {
		fontFamily: 'Montserrat Semibold',
		fontSize: '1.2rem',
	},
	listItemLink: {
		padding: 0,
		'&:hover': {
			textDecoration: 'underline',
			backgroundColor: 'transparent',
		},
	},
	listItemText: {
		display: 'flex',
		flex: 'none',
		fontFamily: 'Montserrat Medium',
		fontSize: '.88rem',
		color: '#3B3B3B',
		'&:hover': {
			textDecoration: 'underline',
			backgroundColor: 'none',
		},
	},
}));
