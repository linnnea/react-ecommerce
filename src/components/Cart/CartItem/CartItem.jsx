import React from 'react';
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
	const classes = useStyles();

	return (
		<Card square={true} className={classes.root}>
			<CardContent className={`${classes.cardContent} ${classes.cardImg}`}>
				<CardMedia
					image={item.media.source}
					alt={item.name}
					className={classes.media}
				/>
			</CardContent>
			<CardContent
				className={`${classes.cardContent} ${classes.cardProductInfo}`}
			>
				<div className={classes.productInfo}>
					<Typography className={classes.title} variant="h4">
						{item.name}
					</Typography>
					<Typography className={classes.subtitle} variant="h6">
						Mini Skateboard
					</Typography>
				</div>
			</CardContent>
			<CardContent className={classes.cardActions}>
				<CardActions className={classes.cardAction}>
					<div className={classes.buttons}>
						<Button
							type="button"
							square={true}
							className={classes.button}
							onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
							style={{
								backgroundColor: 'transparent',
								border: '1px solid #000',
								borderRadius: 0,
							}}
						>
							<RemoveIcon className={classes.quantityIcon} />
						</Button>
						<Typography style={{ margin: '0 10px' }}>
							{item.quantity}
						</Typography>
						<Button
							type="button"
							square={true}
							className={classes.button}
							onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
							style={{
								backgroundColor: 'transparent',
								border: '1px solid #000',
								borderRadius: 0,
							}}
						>
							<AddIcon className={classes.quantityIcon} />
						</Button>
					</div>
				</CardActions>
				<CardActions className={classes.cardAction}>
					<Typography
						variant="h5"
						style={{ fontSize: '.85rem', fontWeight: '600' }}
					>
						{item.line_total.formatted.replace(/\.00$/, '')} SEK
					</Typography>
				</CardActions>
				<CardActions className={classes.cardAction}>
					<Button
						type="button"
						className={classes.removeBtn}
						onClick={() => onRemoveFromCart(item.id)}
						style={{
							backgroundColor: 'transparent',
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<ClearIcon className={classes.removeIcon} />
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default CartItem;
