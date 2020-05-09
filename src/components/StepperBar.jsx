import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: 'auto',
    display: 'flex',
    backgroundColor: 'gold',
  },
});

export default function ProgressMobileStepper({ valor }) {

  const classes = useStyles();

  return (
    <MobileStepper
      variant='progress'
      steps={5}
      position='static'
      activeStep={valor}
      className={classes.root}
    />
  );
}
