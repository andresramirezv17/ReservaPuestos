import React, { useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import Logo from 'assets/image/workspace.png';
import { useStyles } from './styles';

export interface LandingProps {
  onContinue: (name: string, password: string) => void;
}
export const Landing: React.FC<LandingProps> = ({ onContinue }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [password, setpassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showPassError, setshowPassError] = useState(false);

  const handleInput = () => {
    if (text.length <= 0 || text.includes(':')) {
      setShowError(true);
    }
    if (password.length <= 0) {
      setshowPassError(true);
    } else {
      setShowError(false);
      onContinue(text, password);
    }
  };
  return (
    <>
      <Grid container className={classes.container}>
        <Grid justify="center" container item xs={12} md={5}>
          <Grid item>
            <div className={classes.containerImg}>
              <img className={classes.img} src={Logo} alt="Logo" />
            </div>
            <Typography
              className={classes.title}
              variant="body2"
              align="center"
              color="textSecondary"
            >
              Bienvenido
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              Ingresa para poder ver tus puestos de trabajo
            </Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <TextField
              inputProps={{ 'data-testid': 'input-username' }}
              className={classes.input}
              fullWidth
              error={showError}
              value={text}
              helperText={showError && 'Incorrect entry.'}
              onChange={(e) => {
                setText(e.target.value);
                setShowError(false);
              }}
              id="outlined-basic"
              label="User"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              inputProps={{ 'data-testid': 'password-username' }}
              type="password"
              className={classes.inputPass}
              fullWidth
              error={showPassError}
              value={password}
              helperText={showPassError && 'Incorrect password.'}
              onChange={(e) => {
                setpassword(e.target.value);
                setshowPassError(false);
              }}
              label="Password"
              variant="outlined"
              autoComplete="off"
            />
            <Button
              data-testid="continue"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleInput()}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
