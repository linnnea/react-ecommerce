import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Marquee = () => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<div
			className={
				location.pathname === '/'
					? `${classes.marquee} ${classes.marqueeWhite}`
					: `${classes.marquee} ${classes.marqueeBlack}`
			}
		>
			<div
				className={
					location.pathname === '/'
						? `${classes.marqueeText} ${classes.marqueeTextBlack}`
						: `${classes.marqueeText} ${classes.marqueeTextWhite}`
				}
			>
				<Typography className={classes.marqueeSpan}>
					Free shipping over 2000 sek
				</Typography>
				<Typography className={classes.marqueeSpan}>
					Free shipping over 2000 sek
				</Typography>
				<Typography className={classes.marqueeSpan}>
					Free shipping over 2000 sek
				</Typography>
			</div>
		</div>
	);
};

export default Marquee;
