import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	sectionImg: {
		margin: [[0, 'auto']],
		width: '100%',
		height: 300,
		objectFit: 'cover',
	},
	sectionHeader: {
		fontFamily: 'Montserrat Semibold',
		fontSize: '1.3rem',
	},
	sectionBodyText: {
		fontFamily: 'Montserrat Regular',
		fontSize: '.85rem',
		color: '#646464',
		marginBottom: 25,
		width: 345,
	},
	innerSectionText: {
		margin: [[15, 0]],
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		margin: [[10, 0]],
		height: 55,
		width: 200,
		borderRadius: 0,
		fontFamily: 'Montserrat Medium',
		fontSize: '.9rem',
		textTransform: 'inherit',
		'&:hover': {
			backgroundColor: '#313131',
		},
	},
	secondaryBtn: {
		border: '2px solid #000',
		color: '#000',
		'&:hover': {
			backgroundColor: '#000',
			color: '#fff',
		},
	},
}));
