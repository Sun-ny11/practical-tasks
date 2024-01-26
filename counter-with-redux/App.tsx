import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingsCount } from './components/settingsCount/SettingsCount';
import { useSelector } from 'react-redux';
import { StoreType } from './redux/store';
import { useDispatch } from 'react-redux';
import { addCounterSettingsAC, focusMesAC, resetAC, upCountAC } from './redux/counterReducer';

export type countState = {
  maxValue: number
  initialValue: number
  isActive: boolean
}

function App() {
  const [settingMax, setSettingMax] = useState(5)
  const [settingInitial, setSettingInitial] = useState(0)

  const settingsConditionBtn = settingMax === settingInitial
    || settingMax < 0
    || settingInitial < 0
    || settingMax < settingInitial
    ? true : false


  const dispatch = useDispatch()

  const reset = () => {
    dispatch(resetAC(settingInitial))
  }

  return (
    <div className='container'>
      <Counter
        reset={reset}
        settingsConditionBtn={settingsConditionBtn}
      />
      <SettingsCount
        settingMax={settingMax}
        settingInitial={settingInitial}
        setSettingMax={setSettingMax}
        setSettingInitial={setSettingInitial}
        settingsConditionBtn={settingsConditionBtn}
      />
    </div>

  );
}

export default App;
