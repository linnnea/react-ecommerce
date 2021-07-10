import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const ContactContainer = ({ title, bodyText }) => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<Typography className={classes.title} variant="h4" gutterBottom>
				{title}
			</Typography>
			<Typography className={classes.bodyText} variant="h4" gutterBottom>
				{bodyText}
			</Typography>
		</div>
	);
};

export default ContactContainer;
