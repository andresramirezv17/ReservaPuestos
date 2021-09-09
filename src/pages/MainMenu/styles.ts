import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    iconLeft: {
      fontSize: '4em',
      color: 'white',
    },
    iconRight: {
      fontSize: '4em',
      color: 'black',
    },
    img: {
      height: '30px',
      width: '30px',
    },
  }),
);
