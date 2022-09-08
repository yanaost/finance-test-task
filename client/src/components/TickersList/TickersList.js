import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { io } from 'socket.io-client';

import { Grid } from '@material-ui/core';

import { receiveTickersData } from '../../store/tickers';
import { Ticker } from '../Ticker';

const socket = io('http://localhost:4000');

export const TickersList = () => {
  const disabledTickers = useSelector(state => state.tickers.disabledTickers);
  const allTickers = useSelector(state => state.tickers.allTickers);
  const view = useSelector(state => state.tickers.tickersView);
  const interval = useSelector(state => state.interval.interval);

  let visibleTickers = allTickers;

  if (view === 'gainers') {
    visibleTickers = allTickers.filter(
      ticker => ticker.isGrowing === true && !disabledTickers[ticker.ticker],
    );
  }

  if (view === 'loosers') {
    visibleTickers = allTickers.filter(
      ticker => ticker.isGrowing === false && !disabledTickers[ticker.ticker],
    );
  }

  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('start');

    dispatch(receiveTickersData(socket));
  }, []);

  useEffect(() => {
    socket.emit('changeInterval', interval);
  }, [interval]);

  return (
    <Grid container spacing={2}>
      {visibleTickers.map(ticker => (
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Ticker
            key={ticker.ticker}
            id={ticker.ticker}
            exchange={ticker.exchange}
            price={ticker.price}
            isGrowing={ticker.isGrowing}
            priceDifference={ticker.priceDifference}
            percentPriceDifference={ticker.percentPriceDifference}
          />
        </Grid>
      ))}
    </Grid>
  );
};
