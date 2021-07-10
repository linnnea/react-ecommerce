import { Typography, useMediaQuery } from '@material-ui/core';

import useStyles from './styles';
import ContactContainer from './ContactContainer/ContactContainer';
import ContactForm from './ContactForm/ContactForm';

const ContactUs = () => {
	const classes = useStyles();
	const largerThanIpad = useMediaQuery('(min-width:1024px)');

	return (
		<div className={classes.contactTop}>
			<div className={classes.toolbar} />
			<Typography
				align="center"
				className={`${classes.title} ${classes.topTitle}`}
				variant="h3"
				gutterBottom
			>
				Contact Us
			</Typography>

			<div className={classes.main}>
				<div className={classes.leftContact}>
					<Typography
						align="center"
						className={classes.title}
						variant="h4"
						gutterBottom
					>
						Hello 👋 Let's get in touch.
					</Typography>

					<ContactForm />
					{!largerThanIpad && (
						<Typography align="center" variant="h4" gutterBottom>
							👇
						</Typography>
					)}
				</div>

				<div className={classes.rightContact}>
					<ContactContainer
						title="In the Stockholm area? Swing by our store:"
						bodyText={
							<>
								Roslagsgatan 14
								<br /> 113 55 Stockholm
							</>
						}
					/>
					<ContactContainer
						title="Store Hours"
						bodyText={
							<>
								Monday - Friday
								<br /> 10:00 - 17:00
							</>
						}
					/>
					<ContactContainer
						title="Support"
						bodyText={
							<>
								kim@urskog.com
								<br />
								<a className={classes.phone} href="tel:+46723280896">
									+4672 328 08 96
								</a>
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
