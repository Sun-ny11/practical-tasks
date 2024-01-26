import React, { FC } from "react";
import { Button } from "../button/Button";
import { InputSetting } from "./inputSetting/InputSetting";
import "../../App.css"
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { countState } from "../../App"
import { addCounterSettingsAC, focusMesAC } from "../../redux/counterReducer";


type SettingsCountProps = {
   settingMax: number
   settingInitial: number
   setSettingMax: (item: number) => void
   setSettingInitial: (item: number) => void
   settingsConditionBtn: boolean

}

export const SettingsCount: FC<SettingsCountProps> = ({
   settingMax,
   settingInitial,
   setSettingMax,
   setSettingInitial,
   settingsConditionBtn,
}) => {

   const dispatch = useDispatch()

   const focusMessage = () => {
      dispatch(focusMesAC())
   }

   const onClickHandler = () => {
      if (!settingsConditionBtn) {
         dispatch(addCounterSettingsAC(settingMax, settingInitial, false))
      }
   }
   return (
      <div className="setting" >
         <div onFocus={focusMessage} >
            <InputSetting name={"Max value"} onChange={setSettingMax} type={"number"} value={settingMax}></InputSetting>
            <InputSetting name={"Start value"} onChange={setSettingInitial} type={"number"} value={settingInitial}></InputSetting>
         </div>
         <Button disabled={settingsConditionBtn} nameButton="set" onClick={onClickHandler} />
      </div>
   );
};