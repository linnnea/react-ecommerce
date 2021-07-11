import React from 'react';
import { Button, Typography } from '@material-ui/core';

import useStyles from './styles';

const Hero = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.main}>
				<div className={classes.hero}>
					<div className={classes.toolbar} />
					<Typography
						variant="h6"
						style={{
							paddingBottom: 10,
							fontFamily: 'Montserrat Semibold',
							fontSize: '0.95em',
							textTransform: 'uppercase',
							color: '#fff',
						}}
					>
						Swedish riding concept
					</Typography>
					<header className={classes.header}>
						Feel the northern roots in every line and every curve.
					</header>
					<div className={classes.buttons}>
						<Button
							type="button"
							href="/our-story"
							className={`${classes.button} ${classes.secondaryBtn}`}
						>
							Our story
						</Button>
						<Button
							type="button"
							href="/products"
							className={`${classes.button} ${classes.primaryBtn}`}
						>
							Shop online
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
