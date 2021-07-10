import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../../assets/ourstory.jpeg';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		margin: [['6em', 0, '2em', 0]],
		fontFamily: 'OPTIVenus',
		fontSize: '1rem',
	},
	bodyText: {
		fontFamily: 'Montserrat Medium',
		fontSize: '0.95rem',
		maxWidth: 440,
		margin: [[0, 'auto', 10, 'auto']],
		padding: [[5]],
	},
	bodyTextTwo: {
		fontFamily: 'Montserrat Medium',
		fontSize: '0.95rem',
		maxWidth: 440,
		margin: [[0, 'auto', 50, 'auto']],
		padding: [[5]],
	},
	storyImg: {
		backgroundImage: `url(${backgroundImg})`,
		backgroundPosition: 'center top',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		width: 'calc(100% - 25px)',
		height: 700,
		margin: [[0, 'auto']],
	},
}));
