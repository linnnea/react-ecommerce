import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Section = ({
	sectionHeader,
	sectionBodyText,
	backgroundImg,
	buttonText,
}) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<div style={{ width: 345, height: 310 }}>
				<img className={classes.sectionImg} src={backgroundImg} alt="" />
			</div>
			<div className={classes.sectionText}>
				<div className={classes.innerSectionText}>
					<Typography
						variant="h4"
						className={classes.sectionHeader}
						gutterBottom
					>
						{sectionHeader}
					</Typography>
					<Typography variant="body1" className={classes.sectionBodyText}>
						{sectionBodyText}
					</Typography>
					<Button
						component={Link}
						to={'/products'}
						className={`${classes.button} ${classes.secondaryBtn}`}
					>
						{buttonText}
					</Button>
				</div>
			</div>
		</>
	);
};

export default Section;
