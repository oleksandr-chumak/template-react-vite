import {createSlice, Slice} from '@reduxjs/toolkit';
import {AlertInitialState} from '../../types';
import {AlertActions} from '../../types/redux/actions/alert-actions.ts';


const initialState: AlertInitialState = {
  test: 'test'
};

const alertSlice: Slice<AlertInitialState, AlertActions, 'alert'> = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    logTest: (state: AlertInitialState): void => {
      console.log(state.test);
    }
  }
});


export const {logTest} = alertSlice.actions;
export default alertSlice.reducer;