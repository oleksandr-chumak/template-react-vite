import {AlertInitialState} from './index.ts';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

export type RootStore = ToolkitStore<{
  alert: AlertInitialState
}>;