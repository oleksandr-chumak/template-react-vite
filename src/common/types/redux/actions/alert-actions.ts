import {AlertInitialState} from '../initial-state';

export type  AlertActions = {
  logTest: LogTest
};

type LogTest = (state: AlertInitialState) => void