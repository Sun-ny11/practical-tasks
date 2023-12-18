import React, { FC } from "react";
import { Button } from "../button/Button";
import '../../App.css';

type CounterPropsType = {
   initialValue: number
   upCount: () => void
   reset: () => void
   maxCountValue: number
   settingsConditionBtn: boolean
   isActive: boolean
}

export const Counter: FC<CounterPropsType> = ({ initialValue, upCount, reset, maxCountValue, settingsConditionBtn, isActive }) => {

   const conditionHandler = initialValue === maxCountValue

   return (
      <div className="main">
         <h1>Counter</h1>

         <div className={conditionHandler && !isActive ? "max count" : "count"}> 
            {settingsConditionBtn ? <span className="max count">Incorrect value</span> : isActive ? "Settings" : initialValue}
         </div>

         <div>
            <Button disabled={conditionHandler || isActive ? true : false}
               nameButton="inc"
               onClick={upCount} />
            <Button disabled={isActive ? true : false} nameButton="reset"
               onClick={reset} />
         </div>
      </div>
   );
};