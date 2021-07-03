import React from 'react';
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInput';

const AddressForm = () => {
	const methods = useForm();

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit="">
					<Grid container spacing={3}>
						<FormInput required name="firstName" label="First name" />
						<FormInput required name="lastName" label="Last name" />
						<FormInput required name="address1" label="Address" />
						<FormInput required name="firstName" label="Email" />
						<FormInput required name="city" label="City" />
						<FormInput required name="zip" label="Postal code" />
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select value="" fullWidth onChange="">
								<MenuItem></MenuItem>
							</Select>
						</Grid>
					</Grid>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
