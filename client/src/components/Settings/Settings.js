import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, ButtonGroup } from '@material-ui/core';

import { intervalActions } from '../../store/interval';
import { tickersActions } from '../../store/tickers';

export const Settings = () => {
  const interval = useSelector(state => state.interval.interval);
  const view = useSelector(state => state.tickers.tickersView);

  const dispatch = useDispatch();

  const changeIntervalHandler = (intervalInMs) => {
    dispatch(intervalActions.changeInterval(intervalInMs));
  };

  const filterHandler = (viewValue) => {
    dispatch(tickersActions.updateTickersView(viewValue));
  };

  return (
    <>
      <ButtonGroup size='medium' variant='outlined' color='secondary' fullWidth={true}>
        <Button
          onClick={() => filterHandler('gainers')}
          variant={view === 'gainers' ? 'outlined' : 'contained'}
        >
          Gainers
        </Button>

        <Button
          onClick={() => filterHandler('loosers')}
          variant={view === 'loosers' ? 'outlined' : 'contained'}
        >
          Loosers
        </Button>

        <Button
          onClick={() => filterHandler('all')}
          variant={view === 'all' ? 'outlined' : 'contained'}
        >
          All
        </Button>
      </ButtonGroup>

      <ButtonGroup size='medium' variant='outlined' color='primary' fullWidth={true}>
        <Button disabled>Update interval</Button>
        <Button
          onClick={() => changeIntervalHandler(5000)}
          variant={interval === 5000 ? 'outlined' : 'contained'}
        >
          5s
        </Button>
        <Button
          onClick={() => changeIntervalHandler(10000)}
          variant={interval === 10000 ? 'outlined' : 'contained'}
        >
          10s
        </Button>

        <Button
          onClick={() => changeIntervalHandler(30000)}
          variant={interval === 30000 ? 'outlined' : 'contained'}
        >
          30s
        </Button>
      </ButtonGroup>
    </>
  );
};
