import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import { ReactComponent as ShoppingCart } from '../../assets/noun_Shopping Bag_159084.svg';
import { ReactComponent as LogoIcon } from '../../assets/urskog-logo.svg';
import { ReactComponent as LogoIconWhite } from '../../assets/urskog-logo-white.svg';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const classes = useStyles();
	const location = useLocation();

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

	const mobileMenuId = 'primary-search-account-menu-mobile';

	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton
					component={Link}
					to="/cart"
					aria-label="Show cart items"
					color="inherit"
				>
					<Badge
						badgeContent={totalItems}
						color="secondary"
						classes={{ badge: classes.badge }}
					>
						<ShoppingCart />
					</Badge>
				</IconButton>
				<p>Cart</p>
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<AppBar
				position="absolute"
				className={
					location.pathname === '/' ? classes.indexPage : classes.appBar
				}
				color="inherit"
			>
				<Toolbar style={{ top: 15 }}>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						className={classes.title}
						color="inherit"
					>
						{location.pathname === '/' ? (
							<LogoIconWhite className={classes.logo} />
						) : (
							<LogoIcon className={classes.logo} />
						)}
					</Typography>
					<div className={classes.grow} />
					<div
						className={classes.button}
						style={{ backgroundColor: 'transparent' }}
					>
						<IconButton
							component={Link}
							to="/cart"
							aria-label="Show cart items"
							color="inherit"
						>
							<Badge
								badgeContent={totalItems}
								color="secondary"
								classes={{ badge: classes.badge }}
							>
								<ShoppingCart
									className={
										location.pathname === '/'
											? `${classes.shoppingCartIcon} ${classes.shoppingCartIconWhite}`
											: `${classes.shoppingCartIcon} ${classes.shoppingCartIconBlack}`
									}
								/>
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
				<Typography className={classes.navLinks}>
					<Link
						to="/products"
						className={
							location.pathname === '/'
								? `${classes.link} ${classes.linkWhite}`
								: `${classes.link} ${classes.linkBlack}`
						}
					>
						Skateboards
					</Link>
					<Link
						to="/our-story"
						className={
							location.pathname === '/'
								? `${classes.link} ${classes.linkWhite}`
								: `${classes.link} ${classes.linkBlack}`
						}
					>
						Our story
					</Link>
					<Link
						to="/contact-us"
						className={
							location.pathname === '/'
								? `${classes.link} ${classes.linkWhite}`
								: `${classes.link} ${classes.linkBlack}`
						}
					>
						Contact us
					</Link>
				</Typography>
			</AppBar>
			{renderMobileMenu}
		</>
	);
};

export default Navbar;
