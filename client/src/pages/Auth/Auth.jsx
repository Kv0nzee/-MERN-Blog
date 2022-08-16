import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import Icon from './Icon';

const Auth = () => {

  const classes =useStyles();
  const [ showPassword, setShowPassword ] = useState(false);
  const [ isSignup, setIsSignup ] = useState(false);
  const [ confirmShowPassword, setConfirmShowPassword ] = useState(false);

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleConfirmShowPassword = () => setConfirmShowPassword((prevConfirmShowPassword) => !prevConfirmShowPassword);

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };

  const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup);

  const onSuccess = () => {

  };

  const onFailure = () => {

  };
  
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{ isSignup ? 'Sign Up' : 'Sign In' }</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFoucs half />
                            <Input name="firstName" label="First Name" handleChange={handleChange}  half />
                        </>
                    )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>    
                    { isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={confirmShowPassword ? 'text' : 'password'} handleShowPassword={handleConfirmShowPassword} />} 
                </Grid>
                <GoogleLogin 
                    clientId='GOOGLE ID'
                    render={(renderProps) => (
                        <Button 
                            className={classes.googleButton} 
                            color="primary" 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />} 
                            variant="contained">
                                Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="sing;e_host_origin"
                />
                <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit} >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth