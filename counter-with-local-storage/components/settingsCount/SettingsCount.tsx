import React, { FC } from "react";
import { Button } from "../button/Button";
import { InputSetting } from "./inputSetting/InputSetting";
import "../../App.css"

type SettingsCountProps = {
   addSettings: (max: number, initial: number, isActive: boolean) => void
   settingMax: number
   settingInitial: number
   setSettingMax: (item: number) => void
   setSettingInitial: (item: number) => void
   settingsConditionBtn: boolean
   focusMessage: () => void
}

export const SettingsCount: FC<SettingsCountProps> = ({
                                                         addSettings,
                                                         settingMax,
                                                         settingInitial,
                                                         setSettingMax,
                                                         setSettingInitial,
                                                         settingsConditionBtn,
                                                         focusMessage
}) => {


   const onClickHandler = () => {
      if (!settingsConditionBtn) {
         addSettings(settingMax, settingInitial, false)
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