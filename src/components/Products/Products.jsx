import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
	{
		id: 1,
		name: 'Valnötsrot',
		description: 'Mini Skateboard',
		price: '1,499 SEK',
		image:
			'https://cdn.shopify.com/s/files/1/0553/5875/0894/products/Resized_1_720x.png?v=1620379520',
	},
	{
		id: 2,
		name: 'Aska',
		description: 'Mini Skateboard',
		price: '1,499 SEK',
		image:
			'https://cdn.shopify.com/s/files/1/0553/5875/0894/products/Untitled1_4a4242a0-dd6c-4ae6-a139-ff9f1f4f7342_1512x.jpg?v=1623225132',
	},
	{
		id: 3,
		name: 'Rosewood',
		description: 'Mini Skateboard',
		price: '1,499 SEK',
		image:
			'https://cdn.shopify.com/s/files/1/0553/5875/0894/products/FULFORO_1_720x.png?v=1620379520',
	},
	{
		id: 4,
		name: 'Bläck',
		description: 'Mini Skateboard',
		price: '1,499 SEK',
		image:
			'https://cdn.shopify.com/s/files/1/0553/5875/0894/products/froblackJPG_9ce83035-3099-4f67-b0e1-64513e7893e7_720x.jpg?v=1624878656',
	},
];

const Products = () => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<Grid className={classes.toolbar} container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
