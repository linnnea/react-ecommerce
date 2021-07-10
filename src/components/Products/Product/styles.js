import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '100%',
		padding: 0,
		backgroundColor: '#EFEFEF',
		boxShadow: 'none',
		marginTop: 25,
	},
	media: {
		paddingTop: '75%',
		margin: [[20, 0]],
		backgroundSize: 'contain',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 15,
		border: '2px solid #000',
		color: '#000',
		borderRadius: 0,
		fontFamily: 'Montserrat Semibold',
		fontSize: '.8rem',
		textTransform: 'inherit',
		height: 55,
		width: '100%',
		'&:hover': {
			backgroundColor: '#000',
			color: '#fff',
			border: 'none',
		},
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
	},
}));
