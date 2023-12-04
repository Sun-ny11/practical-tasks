import React, { FC } from "react";


type ButtonPropsType = {
   nameButton: string
   onClick: () => void
   disabled: boolean
}

export const Button: FC<ButtonPropsType> = ({ nameButton, onClick, disabled }) => {

   const onClickHandler = () => onClick()

   return (
      <button disabled={disabled} onClick={onClickHandler}>{nameButton}</button>
   );
}