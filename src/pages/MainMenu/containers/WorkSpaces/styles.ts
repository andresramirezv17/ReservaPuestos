import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    title: {
      marginTop: '10px',
    },
    boxNoReserves: {
      justifyContent: 'center',
      fontSize: '2em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    noReservesText: {
      fontSize: '0.8em',
      color: 'rgb(9, 38, 121)',
      fontWeight: 'bold',
    },
  }),
);
