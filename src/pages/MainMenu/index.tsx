import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
import { useStyles } from './styles';
import { WorkSpaces } from './containers/WorkSpaces';
import { ReserveWorkSpace } from './containers/ReserveWorkSpaces';
import { UserWorkspaceProvider } from './context/WorkspaceContext';
import { ReserveProvider } from './context/ReserveContext';

export const MainMenu: React.FC = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  return (
    <UserWorkspaceProvider>
      <ReserveProvider>
        <Container maxWidth="md">
          <Tabs
            centered
            value={value}
            style={{
              background: 'linear-gradient(45deg, #092679 30%, #00dbff 90%)',
              borderRadius: '10px',
            }}
            onChange={handleChange}
          >
            <Tab
              icon={<EventSeatIcon className={classes.iconLeft} />}
              label="My Workspaces"
              style={{ minWidth: '40%', fontWeight: 'bold', color: 'white' }}
            />
            <Tab
              icon={<BusinessIcon className={classes.iconRight} />}
              label="Reserve"
              style={{ minWidth: '40%', fontWeight: 'bold' }}
            />
          </Tabs>
          {value === 0 && <WorkSpaces />}
          {value === 1 && <ReserveWorkSpace />}
        </Container>
      </ReserveProvider>
    </UserWorkspaceProvider>
  );
};
