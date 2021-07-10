import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	marquee: {
		position: 'relative',
		top: 100,
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: 45,
		overflow: 'hidden',
		zIndex: 1,
	},
	marqueeBlack: {
		backgroundColor: '#000',
	},
	marqueeWhite: {
		backgroundColor: '#fff',
	},
	marqueeText: {
		display: 'flex',
		alignItems: 'center',
		position: 'absolute',
		width: '200%',
		height: 30,
		overflow: 'hidden',
		animation: '$marquee 4.5s linear infinite',
		'@media only screen and (min-width: 768px)': {
			animation: '$marquee 12s linear infinite',
		},
	},
	marqueeTextBlack: {
		color: '#000',
	},
	marqueeTextWhite: {
		color: '#fff',
	},
	'@keyframes marquee': {
		'0%': { left: 0 },
		'100%': { left: '-100%' },
	},
	marqueeSpan: {
		float: 'left',
		width: '50%',
		fontFamily: 'OPTIVenus',
		fontSize: '0.6rem',
		textTransform: 'uppercase',
	},
}));
