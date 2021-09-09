import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    mainBox: {
      cursor: 'pointer',
      width: '100%',
      marginTop: '15px',
    },
    cardContent: {
      padding: '0px',
    },
    headerCard: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#093a79',
      color: 'white',
      padding: '10px',
      marginBottom: '10px',
    },
    bodyCard: {
      flexDirection: 'row',
      display: 'flex',
      paddingLeft: '10px',
      paddingRight: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerCard: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    title: {
      fontSize: '20px',
    },
    buttonCheckin: {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#093a79',
    },
    buttonChekout: {
      fontWeight: 'bold',
      backgroundColor: '#fa8787',
    },
  }),
);
