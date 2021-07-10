import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import Loader from '../Loader/Loader';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
	const [isLoading, setIsLoading] = useState(true);
	const classes = useStyles();

	const handleEmptyCart = () => onEmptyCart();

	const cartLineItems = cart.line_items;
	const isEmpty = Object.keys(cart).length && !cartLineItems.length;

	const renderEmptyCart = () => (
		<div className={classes.emptyCart}>
			<Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
				Your cart is empty
			</Typography>
			<Button
				component={Link}
				to="/products"
				type="button"
				className={`${classes.button} ${classes.checkoutBtn}`}
			>
				Continue shopping
			</Button>
		</div>
	);

	useEffect(() => {
		if (!cartLineItems) {
			return setIsLoading(true);
		} else setIsLoading(false);
	}, [cartLineItems]);

	const renderCart = () => (
		<>
			<Grid container spacing={3} className={classes.gridRoot}>
				{cart.line_items.map((lineItem) => (
					<Grid item xs={12} key={lineItem.id}>
						<CartItem
							item={lineItem}
							onUpdateCartQty={onUpdateCartQty}
							onRemoveFromCart={onRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>
			<div className={classes.total}>
				<Typography variant="h4" className={classes.subtotal}>
					Total
				</Typography>
				<Typography variant="h4" className={classes.subtotal}>
					{cart.subtotal.formatted.replace(/\.00$/, '')} SEK
				</Typography>
			</div>
			<div className={classes.cardDetails}>
				<Button
					className={classes.emptyBtn}
					type="button"
					onClick={handleEmptyCart}
				>
					{' '}
					Empty cart
				</Button>
				<Button
					className={`${classes.button} ${classes.checkoutBtn}`}
					component={Link}
					to="/checkout"
					type="button"
				>
					Go to checkout
				</Button>
			</div>
		</>
	);

	return (
		<Container className={classes.container}>
			{isLoading && <Loader />}
			<div className={classes.toolbar} />
			<Typography
				align="center"
				className={classes.title}
				variant="h3"
				gutterBottom
			>
				Cart
			</Typography>
			{isEmpty ? renderEmptyCart() : renderCart()}
		</Container>
	);
};

export default Cart;
