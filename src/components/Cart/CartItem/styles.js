import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: 'none',
		backgroundColor: 'transparent',
		maxWidth: 350,
		margin: [[0, 'auto']],
		'@media only screen and (min-width: 768px)': {
			flexDirection: 'row',
			justifyContent: 'space-between',
			maxWidth: 'initial',
		},
	},
	cardImg: {
		margin: '0 auto 20px auto',
		padding: [[15, 5]],
		backgroundColor: '#EFEFEF',
		'@media only screen and (min-width: 768px)': {
			margin: '0',
		},
	},
	media: {
		width: 165,
		height: 165,
		'@media only screen and (min-width: 768px)': {
			width: 130,
			height: 130,
		},
	},
	cardProductInfo: {
		padding: [[16, 8]],
	},
	productInfo: {
		display: 'flex',
		flexDirection: 'column',
		'@media only screen and (min-width: 768px)': {
			width: 180,
			paddingLeft: [[20]],
		},
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: [[16, 0]],
		width: '100%',
	},
	cartAction: {
		justifyContent: 'space-between',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
	},
	button: {
		padding: 0,
		width: '19px',
		height: '19px',
		minWidth: 'initial',
		border: '1px solid #000',
		borderRadius: 0,
		'&:hover': {
			backgroundColor: '#313131',
		},
	},
	title: {
		fontSize: '1.4rem',
		fontWeight: '600',
		'@media only screen and (min-width: 768px)': {
			fontSize: '0.95rem',
			fontWeight: '600',
		},
	},
	subtitle: {
		fontSize: '1rem',
		fontWeight: '400',
		color: '#BBBBBB',
		'@media only screen and (min-width: 768px)': {
			fontSize: '0.85rem',
			fontWeight: '400',
		},
	},
	quantityIcon: {
		width: '0.45em',
		height: '0.45em',
	},
	removeIcon: {
		width: '0.65em',
		height: '0.65em',
	},
}));
