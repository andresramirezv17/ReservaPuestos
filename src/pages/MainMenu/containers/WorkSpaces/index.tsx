import { Grid, Typography } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import { UserWorkspace } from 'pages/MainMenu/context/models/UserWorkspace';
import { UserReserve } from 'pages/MainMenu/context/models/UserReserve';
import { useStyles } from './styles';
import { CardWorkSpaces } from '../../components/CardWorkSpaces';
import { WorkspaceContext } from '../../context/WorkspaceContext';
import { ModalAlert } from '../../components/ModalAlert';

export const WorkSpaces: React.FC = () => {
  const classes = useStyles();
  const [reserves, setreserves] = useState<UserReserve[]>();
  const [showReserves, setshowReserves] = useState(false);
  const { workspaceUser } = useContext(WorkspaceContext);
  const [showAlert, setshowAlert] = useState(false);

  useEffect(() => {
    console.log('workspaces ', workspaceUser.reserves);
    if (typeof workspaceUser !== 'undefined') {
      setshowReserves(true);
    }
  }, [workspaceUser]);

  const showModal = (condition: boolean) => {
    setshowAlert(condition);
    console.log('condition a cambiar', condition);
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
            workspaceUser.reserves?.map((item, index) => (
              <Grid key={index} item md={6} xs={12}>
                <CardWorkSpaces reserve={item} showModal={showModal} />
              </Grid>
            ))}
        </Grid>
      </div>

      <ModalAlert
        showModal={showAlert}
        Title="Información"
        body="¿Deseas realizar el checkin de este puesto?"
        btnCancel="Cancelar"
        btnContinue="continuar"
        showAlert={showModal}
      />
    </div>
  );
};
