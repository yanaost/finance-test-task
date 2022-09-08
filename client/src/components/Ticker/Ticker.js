import { Box } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tickersActions } from '../../store/tickers';

export const Ticker = (props) => {
  const {
    id, exchange, price, isGrowing, priceDifference, percentPriceDifference,
  } = props;

  const disabledTickers = useSelector(state => state.tickers.disabledTickers);

  const isTickerActive = !disabledTickers[id];

  const dispatch = useDispatch();

  const tickerClickHandler = () => {
    dispatch(tickersActions.tickerActiveness(id));
  };

  return (
    <>
      {isTickerActive
        ? (
          <Box
            sx={{
              bgcolor: '#e0f2f1',
              boxShadow: 5,
              borderRadius: 2,
              p: 2,
              width: 140,
              height: 110,
              display: 'inline-block',
              mt: 2,
              '&:hover': { backgroundColor: '#80CBC4' },
            }}
            onClick={tickerClickHandler}
          >
            <Box sx={{ color: '#46505A' }}>{id}</Box>
            <Box sx={{ color: '#173A5E', fontSize: 34, fontWeight: 'medium' }}>
              {price}
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 'bold',
                fontSize: 12,
              }}
              color={isGrowing === true ? '#009688' : 'red'}
            >
              {priceDifference}
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 'bold',
                mx: 1,
                fontSize: 12,
              }}
              color={isGrowing === true ? '#009688' : 'red'}
            >
              {percentPriceDifference}
              %
            </Box>
            <Box
              sx={{ color: '#46505A', fontSize: 10, mt: 2 }}
            >
              {exchange}
            </Box>
          </Box>
        )
        : (
          <Box
            sx={{
              bgcolor: '#ECEFF1',
              boxShadow: 5,
              borderRadius: 2,
              p: 2,
              width: 140,
              height: 110,
              display: 'inline-block',
              mt: 2,
            }}
            onClick={tickerClickHandler}
          >
            <Box sx={{ color: '#B0BEC5' }}>{id}</Box>
            <Box sx={{ color: '#173A5E', fontSize: 34, fontWeight: 'medium' }} />
            <Box
              sx={{
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 12,
              }}
              color={isGrowing === true ? '#009688' : 'red'}
            />
            <Box
              sx={{
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 12,
              }}
              color={isGrowing === true ? '#009688' : 'red'}
            />
          </Box>
        )}
    </>
  );
};
