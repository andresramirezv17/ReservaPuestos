import { Button, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { WorkspacesSearched } from '../../context/models/WorkspacesSearched';
import { ReserveContext } from '../../context/ReserveContext';
import { useStyles } from './styles';

export const CardSearchWorkSpace: React.FC = () => {
  const classes = useStyles();
  const {
    data: { workplaces, building, floor, section, date },
    mutations: { searchWorkplaces },
  } = useContext(ReserveContext);

  const [showList, setshowList] = useState(false);

  useEffect(() => {
    if (workplaces.workplaces?.length === 0) {
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
        <Typography>{date}</Typography>
        <Typography>7:00am a 7:00pm</Typography>
      </div>
      {showList &&
        workplaces.workplaces?.map((item, index) => (
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
                  <span style={{ fontWeight: 'normal' }}>{item.id}</span>
                </Typography>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <AccessTimeIcon />
                    <Typography>
                      {item.initialHour} a {item.endHour}
                    </Typography>
                  </div>
                  <Button className={classes.buttonReserve}>Reservar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
