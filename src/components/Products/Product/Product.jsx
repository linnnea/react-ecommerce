import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
} from '@material-ui/core';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	const handleAddToCart = () => onAddToCart(product.id, 1);

	return (
		<>
			<Card className={classes.root} square={true}>
				<CardContent style={{ padding: '0 10px 20px 10px' }}>
					<div className={classes.cardContent}>
						<CardMedia
							className={classes.media}
							image={product.media.source}
							title={product.name}
						/>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{
								fontSize: '.85rem',
								fontFamily: 'Montserrat Regular',
								paddingBottom: 5,
							}}
						>
							{product.name}
						</Typography>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{
								fontSize: '.7rem',
								fontFamily: 'Montserrat Semibold',
							}}
						>
							{product.price.formatted.replace(/\.00$/, '')} SEK
						</Typography>
					</div>
				</CardContent>
			</Card>
			<Button
				aria-label="Lägg i varukorg"
				onClick={handleAddToCart}
				className={classes.button}
			>
				Add to cart
			</Button>
		</>
	);
};

export default Product;
