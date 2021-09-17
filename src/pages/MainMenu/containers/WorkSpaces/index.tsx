import { Grid, Typography } from '@material-ui/core';
import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import { UserWorkspace } from 'pages/MainMenu/context/models/UserWorkspace';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';
import { useStyles } from './styles';
import { WorkspaceContext } from '../../context/WorkspaceContext';
import { ModalAlert } from '../../components/ModalAlert';
import * as services from '../../services/WorkspaceServices';

const CardWorkSpaces = lazy(() => import('../../components/CardWorkSpaces'));

export const WorkSpaces: React.FC = () => {
  const classes = useStyles();
  const [reserve, setreserve] = useState<UserWorkspace>();
  const [showReserves, setshowReserves] = useState(false);
  const { workspaceUser, getWorkSpaces } = useContext(WorkspaceContext);
  const [showAlert, setshowAlert] = useState(false);
  const [showCancelAlert, setshowCancelAlert] = useState(false);

  useEffect(() => {
    if (typeof workspaceUser !== 'undefined') {
      setshowReserves(true);
    }
  }, [workspaceUser]);

  const showModal = (condition: boolean, type: string) => {
    if (type === 'checkin') {
      setshowAlert(condition);
    } else {
      setshowCancelAlert(condition);
    }
  };

  const showModalInfo = (
    condition: boolean,
    type: string,
    item: UserWorkspace,
  ) => {
    setreserve(item);
    if (type === 'checkin') {
      setshowAlert(condition);
    } else {
      setshowCancelAlert(condition);
    }
  };

  const handleAction = (type: string) => {
    if (type === 'checkin') {
      services.checkinReserve(reserve?.id, reserve, true).then((status) => {
        if (status === 200) {
          getWorkSpaces();
          setshowAlert(false);
        }
      });
    } else {
      services.endReserve(reserve?.id).then((status) => {
        getWorkSpaces();
        setshowCancelAlert(false);
        const item = {
          workplace: reserve?.workplace,
          building: reserve?.building,
          floor: reserve?.floor,
          section: reserve?.section,
          available: true,
          initialHour: reserve?.initialHour,
          endHour: reserve?.endHour,
          isChekin: false,
          id: reserve?.idWorkSpace,
        };
        services.updateWorkSpace(reserve?.idWorkSpace, item, true);
      });
    }
  };

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Puestos reservados
      </Typography>
      <Typography>Estos son los espacios que has reservado</Typography>
      <div
        style={{
          width: '100%',
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '15px',
        }}
      >
        <Grid container spacing={3}>
          {showReserves &&
            workspaceUser.map((item, index) => (
              <Grid key={item.id} item md={6} xs={12}>
                <Suspense
                  fallback={<Typography variant="h5">Cargando...</Typography>}
                >
                  <CardWorkSpaces reserve={item} showModal={showModalInfo} />
                </Suspense>
              </Grid>
            ))}
        </Grid>
      </div>
      {workspaceUser.length === 0 && (
        <div className={classes.boxNoReserves}>
          <DesktopAccessDisabledIcon
            style={{ fontSize: '5em', color: 'rgb(9, 38, 121)' }}
          />
          <Typography className={classes.noReservesText}>
            Todavia no tienes reservas
          </Typography>
        </div>
      )}

      <ModalAlert
        showModal={showAlert}
        Title="Información"
        body="¿Deseas realizar el checkin de este puesto?"
        btnCancel="Cancelar"
        btnContinue="continuar"
        showAlert={showModal}
        handleAction={handleAction}
        action="checkin"
      />
      <ModalAlert
        showModal={showCancelAlert}
        Title="Información"
        body="¿Deseas Finalizar la reserva?"
        btnCancel="Cancelar"
        btnContinue="continuar"
        showAlert={showModal}
        handleAction={handleAction}
        action="end"
      />
    </div>
  );
};
