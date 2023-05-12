import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  contactContainer: {
    paddingTop: '32px',
    marginTop: '64px',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contactTextField: {
    width: '100%',
  },
  contactButton: {
    marginTop: '16px',
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, message }),
});


      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setOpen(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container maxWidth="sm" className={classes.contactContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact
      </Typography>
      <form onSubmit={handleSubmit} className={classes.contactForm}>
        <TextField
          label="Name"
          variant="outlined"
          required
          className={classes.contactTextField}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          required
          className={classes.contactTextField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
          className={classes.contactTextField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" className={classes.contactButton}>
          Submit
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;