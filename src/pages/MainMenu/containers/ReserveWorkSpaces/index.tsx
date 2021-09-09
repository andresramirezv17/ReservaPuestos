import { Grid, Typography } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { CardSearchWorkSpace } from 'pages/MainMenu/components/CardSearchWorkSpace';
import { ReserveContext } from 'pages/MainMenu/context/ReserveContext';
import { FormSearchWorkspace } from '../../components/FormSearchWorkspace';
import { useStyles } from './styles';

export const ReserveWorkSpace: React.FC = () => {
  const classes = useStyles();
  const {
    data: { workplaces },
  } = useContext(ReserveContext);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className={classes.title}>
            Reservar puesto
          </Typography>
          <Typography>Ingrese los datos y realice la busqueda</Typography>
          <FormSearchWorkspace />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className={classes.title}>
            Buscar Puestos
          </Typography>
          <CardSearchWorkSpace />
        </Grid>
      </Grid>
    </div>
  );
};
