import React, { ChangeEvent, FC } from "react";
import '../../../App.css'

type InputSettingProps = {
   name: string
   value: number
   onChange: (value: number) => void
   type: string
}

export const InputSetting: FC<InputSettingProps> = ({ name, value, onChange, type }) => {

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(parseInt(e.currentTarget.value))

   return (
      <div className="inputText">
         <span>{name}</span>
         <input type={type} onChange={onChangeHandler} value={value} />
      </div>
   );
};