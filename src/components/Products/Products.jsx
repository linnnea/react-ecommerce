import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import Loader from '../Loader/Loader';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
	const [isLoading, setIsLoading] = useState(true);
	const classes = useStyles();

	useEffect(() => {
		if (!products.length) {
			return setIsLoading(true);
		} else setIsLoading(false);
	}, [products.length]);

	return (
		<main className={classes.content}>
			{isLoading && <Loader />}
			<div className={classes.toolbar} />
			<Grid container justify="center" spacing={2}>
				{products.map((product) => (
					<Grid
						key={product.id}
						item
						xs={6}
						md={3}
						className={classes.gridProduct}
					>
						<Product product={product} onAddToCart={onAddToCart} />
						<Product product={product} onAddToCart={onAddToCart} />
						<Product product={product} onAddToCart={onAddToCart} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
