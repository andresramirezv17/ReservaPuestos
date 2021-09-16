import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: '25px',
      marginTop: '0.8em',
    },
    root: {
      '& .MuiTextField-root': {
        width: '90%',
        marginTop: '0.8em',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#093a79',
      },
    },
    formControl: {
      width: '90%',
      marginTop: '0.8em',
    },
    boxDate: {
      marginTop: '0.8em',
      display: 'flex',
      flexDirection: 'row',
      width: '90%',
      border: '1px solid #093a79',
      borderRadius: '5px',
      '& .MuiTextField-root': {
        width: '90%',
        marginTop: '0.4em',
      },
    },
    btnSearch: {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#093a79',
      marginTop: '0.8em',
      width: '91%',
      padding: '13px',
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#093a79',
      },
    },
  }),
);
