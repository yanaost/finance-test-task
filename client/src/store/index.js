import { configureStore } from '@reduxjs/toolkit';

import intervalReducer from './interval';
import tickersReducer from './tickers';

const store = configureStore({
  reducer: { tickers: tickersReducer, interval: intervalReducer },
});

export default store;
