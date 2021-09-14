import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../assets/hero.jpg';

export default makeStyles((theme) => ({
	main: {
		position: 'relative',
		top: -45,
		height: '100vh',
		backgroundImage: `url(${backgroundImg})`,
		backgroundPosition: 'center top',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
	hero: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: [[50, 15, 0, 15]],
		height: '100%',
		'@media only screen and (min-width: 768px)': {
			width: '100%',
			margin: [[70, 0, 30, 0]],
			padding: [[0, 100]],
		},
	},
	toolbar: theme.mixins.toolbar,
	header: {
		alignSelf: 'center',
		fontFamily: 'OPTIVenus',
		marginBottom: 30,
		fontSize: '1.65rem',
		fontWeight: '600',
		lineHeight: 1.3,
		color: '#fff',
		'@media only screen and (min-width: 768px)': {
			fontSize: '3rem',
			alignSelf: 'initial',
			maxWidth: 600,
		},
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column-reverse',
		alignSelf: 'center',
		marginBottom: 20,
		width: '100%',
		'@media only screen and (min-width: 768px)': {
			width: 345,
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'initial',
		},
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		margin: [[10, 0]],
		height: 50,
		width: 190,
		minWidth: '100%',
		borderRadius: 0,
		fontFamily: 'Montserrat Medium',
		fontSize: '.9rem',
		textTransform: 'inherit',
		'&:hover': {
			backgroundColor: '#000',
			color: '#fff',
		},
		'@media only screen and (min-width: 768px)': {
			minWidth: '70%',
			margin: [[10]],
		},
	},
	primaryBtn: {
		backgroundColor: '#fff',
		color: '#000',
	},
	secondaryBtn: {
		border: '2px solid #fff',
		color: '#fff',
		'&:hover': {
			backgroundColor: '#fff',
			color: '#000',
			border: 'none',
		},
	},
}));
