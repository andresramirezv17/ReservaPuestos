import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { UserWorkspace } from 'pages/MainMenu/context/models/UserWorkspace';
import { UserReserve } from 'pages/MainMenu/context/models/UserReserve';
import { useStyles } from './styles';

export interface ReserveCardProps {
  reserve: UserReserve;
  showModal: (condition: boolean) => void;
}

export const CardWorkSpaces: React.FC<ReserveCardProps> = ({
  reserve,
  showModal,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.mainBox}>
      <CardContent className={classes.cardContent}>
        <div className={classes.headerCard}>
          <Typography variant="h6">Edicio {reserve.building}</Typography>
          <Typography>Fecha: {reserve.date}</Typography>
        </div>
        <div className={classes.bodyCard}>
          <div>
            <Typography>
              <span style={{ fontWeight: 'bold' }}>Piso:</span> {reserve.floor}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 'bold' }}>Puesto:</span>{' '}
              {reserve.workplace}
            </Typography>
          </div>
          <div>
            <Typography>
              <span style={{ fontWeight: 'bold' }}>Sección: </span>
              {reserve.section}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 'bold' }}>Hora: </span>
              {reserve.initialHour} a {reserve.endHour}
            </Typography>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid grey', margin: '10px' }} />
        <div className={classes.footerCard}>
          <Button
            variant="contained"
            disableRipple
            className={classes.buttonCheckin}
            onClick={() => showModal(true)}
          >
            Realizar Check-in
          </Button>
          <Button
            variant="contained"
            className={classes.buttonChekout}
            onClick={() => showModal(false)}
          >
            Finalizar Reserva
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
