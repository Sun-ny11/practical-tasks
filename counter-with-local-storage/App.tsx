import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { SettingsCount } from './components/settingsCount/SettingsCount';

type countState = {
  maxValue: number
  initialValue: number
  isActive: boolean
}

function App() {
  const [settingMax, setSettingMax] = useState(() => {
    let string = localStorage.getItem("maxCount")
    return string ? JSON.parse(string) : 5
  })
  const [settingInitial, setSettingInitial] = useState(() => {
    let string = localStorage.getItem("initialValue")
    return string ? JSON.parse(string) : 5
  })

  const [countState, setCountState] = useState<countState>({
    maxValue: settingMax,
    initialValue: settingInitial,
    isActive: false
  })

  const settingsConditionBtn = settingMax === settingInitial
    || settingMax < 0
    || settingInitial < 0
    || settingMax < settingInitial
    ? true : false


  const upCount = () => countState.initialValue === countState.maxValue
    ? countState.maxValue
    : setCountState({ ...countState, initialValue: countState.initialValue + 1 })

  const reset = () => setCountState({ ...countState, initialValue: settingInitial })


  const addSettings = (max: number, initial: number, isActive: boolean) => {
    setCountState({ ...countState, maxValue: max, initialValue: initial, isActive: isActive })

    localStorage.setItem("maxCount", JSON.stringify(max))
    localStorage.setItem("initialValue", JSON.stringify(initial))
  }


  const focusMessage = () => { //сработает на фокус, при нажатии на кнопку "addSettings" выключиться 
    setCountState({ ...countState, isActive: true })
    console.log(countState);

  }

  return (
    <div className='container'>
      <Counter
        initialValue={countState.initialValue}
        upCount={upCount}
        reset={reset}
        maxCountValue={countState.maxValue}
        settingsConditionBtn={settingsConditionBtn}
        isActive={countState.isActive}
      />
      <SettingsCount
        addSettings={addSettings}
        settingMax={settingMax}
        settingInitial={settingInitial}
        setSettingMax={setSettingMax}
        setSettingInitial={setSettingInitial}
        settingsConditionBtn={settingsConditionBtn}
        focusMessage={focusMessage}
      />
    </div>

  );
}

export default App;
