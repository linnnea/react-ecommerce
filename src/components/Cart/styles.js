import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: '1em',
		height: 710,
		'@media only screen and (min-width: 768px)': {
			justifyContent: 'initial',
		},
	},
	gridRoot: {
		maxWidth: 900,
		'@media only screen and (min-width: 768px)': {
			margin: [[0, 'auto']],
		},
	},
	toolbar: theme.mixins.toolbar,
	title: {
		margin: [['6em', 0, '2em', 0]],
		fontFamily: 'OPTIVenus',
		fontSize: '1rem',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		borderRadius: 0,
		fontFamily: 'Montserrat Medium',
		fontSize: '.85rem',
		textTransform: 'inherit',
		height: 50,
		width: 200,
		minWidth: '150px',
		'&:hover': {
			backgroundColor: '#313131',
		},
	},
	emptyCart: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	checkoutBtn: {
		backgroundColor: '#000',
		color: '#fff',
	},
	emptyBtn: {
		backgroundColor: 'none',
		textDecoration: 'underline',
		padding: [[0]],
		'&:hover': {
			backgroundColor: 'none',
		},
	},
	total: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: [[30, 'auto', 10, 'auto']],
		maxWidth: 865,
		width: '100%',
	},
	subtotal: {
		fontSize: '1.2rem',
		fontWeight: '600',
	},
	cardDetails: {
		display: 'flex',
		margin: [['3em', 'auto', 0, 'auto']],
		alignItems: 'center',
		justifyContent: 'space-between',
		maxWidth: 865,
		width: '100%',
	},
	subtitle: {
		marginBottom: [[15]],
		fontFamily: 'Montserrat Regular',
		fontSize: '0.8rem',
		textTransform: 'uppercase',
	},
}));
