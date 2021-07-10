import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Section from './Section/Section';
import longboardImg from '../../assets/longboard.jpeg';
import cruiserImg from '../../assets/urskog-fro.jpeg';
import everyoneSkates from '../../assets/everyoneskate.jpeg';
import storeImg from '../../assets/urskog-skate.jpeg';

import useStyles from './styles';

const Sections = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<div className={classes.toolbar} />
			<Typography variant="h2" className={classes.sectionHeader}>
				Our collections
			</Typography>
			<Grid container spacing={2} className={classes.gridContainer}>
				<Grid item xs={12} sm={6} className={classes.gridItem}>
					<Section
						sectionHeader="Longboards"
						backgroundImg={longboardImg}
						sectionBodyText="Longboards are a perfect choice for smooth cruising, racing, downhill or just for great and fun transportation."
						buttonText="Shop longboards"
					/>
				</Grid>
				<Grid item xs={12} sm={6} className={classes.gridItem}>
					<Section
						sectionHeader="Skateboard cruisers"
						backgroundImg={cruiserImg}
						sectionBodyText="Looking for the perfect fusion between a skateboard and a longboard? Look no further, here's the skateboard cruiser!"
						buttonText="Shop cruisers"
					/>
				</Grid>
				<Grid item xs={12} sm={6} className={classes.gridItem}>
					<Section
						sectionHeader="All kinds of skateboards"
						backgroundImg={everyoneSkates}
						sectionBodyText="Urskog skateboards are for everyone! We have all kinds of decks - mini skateboards, cruisers and longboards."
						buttonText="Shop now"
					/>
				</Grid>
				<Grid item xs={12} sm={6} className={classes.gridItem}>
					<Section
						sectionHeader="Stockholm store"
						backgroundImg={storeImg}
						sectionBodyText="Welcome to our store in the heart of Stockholm. Let us guide you through our mixed skateboard assortment."
						buttonText="Opening hours"
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Sections;
