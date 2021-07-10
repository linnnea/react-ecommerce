import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
	indexPage: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
		color: '#fff',
	},
	appBar: {
		backgroundColor: '#fff',
		color: '#000',
		boxShadow: 'none',
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	title: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
		textDecoration: 'none',
	},
	logo: {
		marginRight: 10,
		width: 100,
		height: 60,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	grow: {
		flexGrow: 1,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	navLinks: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: [[10, 18, 0, 18]],
		'@media only screen and (min-width: 768px)': {
			position: 'absolute',
			top: 15,
			left: '50%',
			transform: 'translateX(-50%)',
			width: 400,
		},
	},
	link: {
		fontFamily: 'Montserrat Semibold',
		fontSize: '.9rem',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
		'&:focus': {
			textDecoration: 'underline',
		},
		'@media only screen and (min-width: 768px)': {
			position: 'relative',
			top: 15,
		},
	},
	linkWhite: {
		color: '#fff',
	},
	linkBlack: {
		color: '#000',
	},
	shoppingCartIcon: {
		position: 'relative',
		bottom: -5,
		width: 30,
		height: 30,
	},
	shoppingCartIconWhite: {
		fill: '#fff',
	},
	shoppingCartIconBlack: {
		fill: '#000',
	},
	badge: {
		top: 5,
		minWidth: 16,
		height: 16,
		padding: 0,
		fontSize: '0.5rem',
	},
}));
