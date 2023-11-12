import React, {useEffect} from 'react';
import {logTest, RootState, useAppDispatch, useAppSelector} from './common';
import {Dispatch} from '@reduxjs/toolkit';

function App(): React.JSX.Element {
  const dispatch: Dispatch = useAppDispatch();
  const {test} = useAppSelector((state: RootState) => state.alert);

  useEffect(() => {
    console.log(test);
    dispatch(logTest());
  }, []);

  return (
    <>
      main page
    </>
  );
}

export default App;
