import { createSlice } from '@reduxjs/toolkit';

const initialTickersState = {
  disabledTickers: {},
  allTickers: [],
  tickersView: 'all',
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState: initialTickersState,
  reducers: {
    tickerActiveness(state, action) {
      state.disabledTickers[action.payload] = state.disabledTickers[action.payload] !== undefined
        ? !state.disabledTickers[action.payload]
        : true;
    },

    updateTickers(state, action) {
      const prevTickers = state.allTickers;
      let currentTickers = action.payload;
      currentTickers = currentTickers.map(ticker => {
        const currentTickerId = ticker.ticker;
        const prevTicker = prevTickers.find(
          matchedTicker => matchedTicker.ticker === currentTickerId,
        );
        let prevTickerPrice = 0;

        if (prevTicker) {
          prevTickerPrice = prevTicker.price;
        }

        const currentTickerPrice = Number(ticker.price);
        const priceDifference = Math.round(currentTickerPrice - prevTickerPrice);
        const isGrowing = priceDifference > 0;
        let percentPriceDifference = Math.round((priceDifference / prevTickerPrice) * 100);
        percentPriceDifference = isFinite(percentPriceDifference) ? percentPriceDifference : 0;

        return {
          ...ticker, isGrowing, priceDifference, percentPriceDifference,
        };
      });

      state.allTickers = currentTickers;
    },

    updateTickersView(state, action) {
      state.tickersView = action.payload;
    },
  },
});
export const tickersActions = tickersSlice.actions;

export const receiveTickersData = (socket) => {
  return (dispatch) => {
    socket.on('ticker', (tickers) => {
      dispatch(tickersActions.updateTickers(tickers));
    });
  };
};

export default tickersSlice.reducer;
