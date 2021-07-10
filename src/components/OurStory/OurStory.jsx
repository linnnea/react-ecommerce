import { Typography } from '@material-ui/core';

import useStyles from './styles';

const OurStory = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.toolbar} />
			<Typography
				align="center"
				className={classes.title}
				variant="h3"
				gutterBottom
			>
				Our story
			</Typography>
			<Typography
				align="center"
				className={classes.bodyText}
				variant="body1"
				gutterBottom
			>
				Urskog is a brand founded in 2004 by Christoffer Stivén and Love
				Trollbäck - skateboarders, cabinetmakers & enthusiasts. The idea about
				Urskog came up when their friends was travelling to Brazil for surfing.
				To make longboards and skateboards inspired by the classical Californian
				wooden surf boards from the 50s and 60s.
			</Typography>
			<Typography
				align="center"
				className={classes.bodyTextTwo}
				variant="body1"
			>
				Today Urskog is a well known skateboard brand <br />
				made with nordic birch for{' '}
				<span style={{ color: 'red', fontWeight: 'bold' }}>
					{' '}
					passionate
				</span>{' '}
				skateboarders.
			</Typography>
			<div className={classes.storyImg}></div>
		</div>
	);
};

export default OurStory;
