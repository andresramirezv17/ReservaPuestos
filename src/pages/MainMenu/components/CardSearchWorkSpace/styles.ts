import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& MuiCardContent-root:last-child': {
        paddingBottom: '15px',
      },
    },
    title: {
      fontSize: '20px',
    },
    divSearch: {
      display: 'flex',
      flexDirection: 'row',
      gap: '5px',
      flexWrap: 'wrap',
      '& p': {
        backgroundColor: '#097379',
        padding: '7px',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '17px',
        fontSize: '0.8rem',
      },
    },
    item: {
      backgroundColor: '',
    },
    mainBox: {
      width: '100%',
      marginTop: '15px',
    },
    buttonReserve: {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#097379',
      marginTop: '10px',
      width: '100%',
      '&:hover': {
        backgroundColor: '#097379',
      },
    },
  }),
);
