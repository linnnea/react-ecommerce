import { TextField, Button } from '@material-ui/core';

import useStyles from './styles';

const ContactForm = () => {
	const classes = useStyles();
	return (
		<form className={classes.form}>
			<TextField
				label="Name"
				className={classes.textField}
				fullWidth={true}
				required={true}
			/>
			<TextField
				label="Email"
				className={classes.textField}
				fullWidth={true}
				required={true}
			/>
			<TextField
				label="Message"
				className={classes.textField}
				multiline={true}
				fullWidth={true}
				required={true}
			/>
			<Button type="submit" className={classes.button}>
				Send message
			</Button>
		</form>
	);
};

export default ContactForm;
