import React, { FC } from "react";
import { Button } from "../button/Button";
import '../../App.css';
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { countState } from "../../App"
import { upCountAC } from "../../redux/counterReducer";


type CounterPropsType = {
   reset: () => void
   settingsConditionBtn: boolean
}

export const Counter: FC<CounterPropsType> = ({ reset, settingsConditionBtn}) => {

   const countState = useSelector<StoreType, countState>(state => state.counter)
   const dispatch = useDispatch()

   const upCount = () => {
      dispatch(upCountAC())
   }

   const conditionHandler = countState.initialValue === countState.maxValue

   return (
      <div className="main">
         <h1>Counter</h1>

         <div className={conditionHandler && !countState.isActive ? "max count" : "count"}>
            {settingsConditionBtn ? <span className="max count">Incorrect value</span> : countState.isActive ? "Settings" : countState.initialValue}
         </div>

         <div>
            <Button disabled={conditionHandler || countState.isActive ? true : false}
               nameButton="inc"
               onClick={upCount} />
            <Button disabled={countState.isActive ? true : false} nameButton="reset"
               onClick={reset} />
         </div>
      </div>
   );
};