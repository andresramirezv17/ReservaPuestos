import { Button, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { WorkspacesSearched } from '../../context/models/WorkspacesSearched';
import { ReserveContext } from '../../context/ReserveContext';
import { useStyles } from './styles';

export interface cardSearchProps {
  showModal: (condition: boolean, item: WorkspacesSearched) => void;
}

export const CardSearchWorkSpace: React.FC<cardSearchProps> = ({
  showModal,
}) => {
  const classes = useStyles();
  const {
    data: { workplaces, building, floor, section, fecha, initHour, endHour },
  } = useContext(ReserveContext);

  const [showList, setshowList] = useState(false);

  useEffect(() => {
    if (workplaces.length === 0) {
      setshowList(false);
    } else {
      setshowList(true);
    }
  }, [workplaces]);

  return (
    <div className={classes.root}>
      <Typography>Busqueda: </Typography>
      <div className={classes.divSearch}>
        <Typography>{building}</Typography>
        <Typography>{floor}</Typography>
        <Typography>{section}</Typography>
        <Typography>{fecha}</Typography>
        <Typography>
          {initHour} a {endHour}
        </Typography>
      </div>
      {showList &&
        workplaces.map((item, index) => (
          <div key={item.id}>
            {item.available && (
              <Card className={classes.mainBox}>
                <CardContent>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography style={{ fontWeight: 'bold' }}>
                      Puesto:{' '}
                      <span style={{ fontWeight: 'normal' }}>
                        {item.workplace}
                      </span>
                    </Typography>
                    <div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AccessTimeIcon />
                        <Typography>
                          {item.initialHour} a {item.endHour}
                        </Typography>
                      </div>
                      <Button
                        onClick={() => showModal(true, item)}
                        className={classes.buttonReserve}
                        data-testid="reservar"
                      >
                        Reservar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      {workplaces.length === 1 &&
        workplaces.map((item, index) => (
          <div key={item.id}>
            {!item.available && (
              <Typography style={{ marginTop: '15px' }}>
                No hay puestos para reservar
              </Typography>
            )}
          </div>
        ))}
    </div>
  );
};
