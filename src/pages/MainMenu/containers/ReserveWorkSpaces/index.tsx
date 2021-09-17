import { Grid, Typography } from '@material-ui/core';
import React, { useState, useContext, lazy, Suspense } from 'react';
import { ModalAlert } from 'pages/MainMenu/components/ModalAlert';
import { ReserveContext } from 'pages/MainMenu/context/ReserveContext';
import { WorkspaceContext } from 'pages/MainMenu/context/WorkspaceContext';
import { WorkspacesSearched } from 'pages/MainMenu/context/models/WorkspacesSearched';
import { FormSearchWorkspace } from '../../components/FormSearchWorkspace';
import * as services from '../../services/WorkspaceServices';

import { useStyles } from './styles';

const CardSearchWorkSpace = lazy(
  () => import('pages/MainMenu/components/CardSearchWorkSpace'),
);
export const ReserveWorkSpace: React.FC = () => {
  const classes = useStyles();
  const [showAlert, setshowAlert] = useState(false);
  const [workplace, setworkplace] = useState<WorkspacesSearched>();
  const [reserveError, setreserveError] = useState('');
  const {
    data: { fecha, day },
  } = useContext(ReserveContext);

  const { workspaceUser } = useContext(WorkspaceContext);

  const showModal = (condition: boolean, type: string) => {
    setshowAlert(condition);
    setreserveError('');
  };

  const showModalInfo = (condition: boolean, item: WorkspacesSearched) => {
    setshowAlert(condition);
    setreserveError('');
    setworkplace(item);
  };

  const handleAction = async () => {
    let isSameDate = false;
    const item = {
      building: workplace?.building,
      endHour: workplace?.endHour,
      floor: workplace?.floor,
      initialHour: workplace?.initialHour,
      isChekin: false,
      section: workplace?.section,
      date: fecha,
      workplace: workplace?.workplace,
      idWorkSpace: workplace?.id,
    };
    if (day === 'Saturday' || day === 'Sunday') {
      setreserveError('No es posible reservar los fines de semana');
    } else {
      workspaceUser?.map((elem, index) => {
        if (elem.date === fecha) {
          isSameDate = true;
        }
      });
      if (!isSameDate) {
        services.doReserve(item).then((status) => {
          if (status === 201) {
            setshowAlert(false);
            services
              .updateWorkSpace(workplace?.id, workplace, false)
              .then((res) => {
                if (res === 200) {
                  window.location.reload();
                }
              });
          }
        });
      } else {
        setreserveError('Ya existe una reserva para este día');
      }
    }
  };

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
          <Suspense
            fallback={<Typography variant="h5">Cargando...</Typography>}
          >
            <CardSearchWorkSpace showModal={showModalInfo} />
          </Suspense>
        </Grid>
      </Grid>
      <ModalAlert
        showModal={showAlert}
        Title="Información"
        body="¿Deseas reservar este puesto de trabajo?"
        btnCancel="Cancelar"
        btnContinue="Continuar"
        showAlert={showModal}
        handleAction={handleAction}
        action="reserve"
        error={reserveError}
      />
    </div>
  );
};
