import React, { FC } from "react";
import { Button } from "../button/Button";
import '../../App.css';

type CounterPropsType = {
   countState: number
   add: () => void
   reset: () => void
}

export const Counter: FC<CounterPropsType> = ({ countState, add, reset }) => {

   const conditionHandler = countState === 5

   return (
      <div className="main">
         <h1>Counter</h1>

         <div className={conditionHandler ? "max count" : "count"}>{countState}</div>

         <div>
            <Button disabled={conditionHandler ? true : false} 
                     nameButton="inc" 
                     onClick={add} />
            <Button disabled={conditionHandler ? false : true} 
                     nameButton="reset" 
                     onClick={reset} />
         </div>
      </div>
   );
};