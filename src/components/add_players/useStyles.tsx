import { css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({}),
    row: css({
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: theme.spacing(2, 0, 2, 0),
      [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    }),
    image: css({
      borderRadius: '50%',
      height: '10vh',
      [theme.breakpoints.up('laptop')]: {
        width: '5%',
      },
      button: {
        paddingTop: 0,
      },
      img: {
        borderRadius: '50%',
        height: '10vh',
      },
      svg: {
        width: '1.5em',
        height: '1.5em',
        fill: theme.palette.primary.main,
      },
    }),
    inputField: css({
      color: theme.palette.primary.main,
      alignSelf: 'stretch',
      '& .MuiOutlinedInput-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(255, 255, 255, 1)',
        '&:hover': {
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 5px 15px rgba(255, 255, 255, 0.2)',
        },
      },
      '& .MuiFormHelperText-root': {
        color: 'red',
      },
      '& label': {
        color: 'rgba(255, 255, 255, 0.3)',
      },
      // important class for styling MUIv5 textfield when focused:
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        borderColor: 'transparent',
      },
      '& :-webkit-autofill': {
        transitionDelay: '9999s',
      },
    }),
    nameBox: css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      color: theme.palette.primary.main,
      [theme.breakpoints.up('laptop')]: {
        width: '30%',
        padding: theme.spacing(0, 3, 0, 3),
      },
    }),
    button: css({
      height: `${theme.spacing(4.5)}!important` as any,
      width: theme.spacing(4.5),
      '& svg': {
        height: '1em',
        width: '1em',
      },
    }),
    submitButton: css({
      margin: 'auto',
      width: theme.spacing(18.75),
      display: 'flex',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    }),
  };
};

export default useStyles;
