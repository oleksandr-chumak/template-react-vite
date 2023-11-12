import {FC} from 'react';
import {Children} from '../types';
import {Provider} from 'react-redux';
import store from './store.ts';

export const ReduxProvider: FC<Children> = ({children}: Children) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

