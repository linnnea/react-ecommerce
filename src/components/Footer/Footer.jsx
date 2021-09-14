import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<footer className={classes.footer}>
				<div className={classes.toolbar} />
				<Grid container justify="center" className={classes.container}>
					<Grid item xs={6} md={2}>
						<Typography className={classes.header} variant="h5">
							Skateboards
						</Typography>
						<List className={classes.list}>
							<ListItemLink className={classes.listItemLink} href="/products">
								<ListItemText
									primary="Cruiser skateboards"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink className={classes.listItemLink} href="/products">
								<ListItemText
									className={classes.listItemText}
									primary="Mini Skateboards"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink className={classes.listItemLink} href="/products">
								<ListItemText
									className={classes.listItemText}
									primary="Longboards"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink className={classes.listItemLink}>
								<ListItemText
									className={classes.listItemText}
									primary="Accessories"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
						</List>
					</Grid>
					<Grid item xs={6} md={2}>
						<Typography className={classes.header} variant="h5">
							Customer service
						</Typography>
						<List className={classes.list}>
							<ListItemLink className={classes.listItemLink} href="/contact-us">
								<ListItemText
									className={classes.listItemText}
									primary="Contact us"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink className={classes.listItemLink}>
								<ListItemText
									className={classes.listItemText}
									primary="Returns and Exchanges"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink className={classes.listItemLink}>
								<ListItemText className={classes.listItemText} primary="FAQ" />
							</ListItemLink>
							<ListItemLink className={classes.listItemLink}>
								<ListItemText
									className={classes.listItemText}
									primary="Payment options"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
						</List>
					</Grid>
					<Grid item xs={6} md={2}>
						<Typography className={classes.header} variant="h5">
							Social
						</Typography>
						<List className={classes.list}>
							<ListItemLink
								className={classes.listItemLink}
								href="https://m.facebook.com/Urskog.Cruiser.Boards/"
							>
								<ListItemText
									className={classes.listItemText}
									primary="Facebook"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink
								className={classes.listItemLink}
								href="https://www.instagram.com/urskog/?hl=en"
							>
								<ListItemText
									className={classes.listItemText}
									primary="Instagram"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink
								className={classes.listItemLink}
								href="https://www.youtube.com/channel/UCVMKi5FVWMjzGYWCh6VAfHw"
							>
								<ListItemText
									className={classes.listItemText}
									primary="Youtube"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
						</List>
					</Grid>
					<Grid item xs={6} md={2}>
						<Typography className={classes.header} variant="h5">
							Info
						</Typography>
						<List className={classes.list}>
							<ListItemLink className={classes.listItemLink}>
								<ListItemText
									className={classes.listItemText}
									primary="About us"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
							<ListItemLink className={classes.listItemLink}>
								<ListItemText
									className={classes.listItemText}
									primary="Stockholm store"
									classes={{ primary: classes.listItemText }}
								/>
							</ListItemLink>
						</List>
					</Grid>
				</Grid>
			</footer>
		</>
	);
};

export default Footer;
