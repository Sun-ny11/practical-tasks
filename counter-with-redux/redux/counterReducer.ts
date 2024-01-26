import { countState } from "../App"

const initialState:countState = {
   maxValue: 5,
   initialValue: 0,
   isActive: false
}
type actionType = resetACType | upCountACType | addCounterSettingsACType | focusMesACType

export const counterReducer = (state: countState = initialState, action: actionType): any => {
   switch (action.type) {
      case "RESET": {
         return { ...state, initialValue: action.payload.settingInitial }
      }
      case "UP-COUNT": {
         return state.initialValue === state.maxValue
            ? state
            : { ...state, initialValue: state.initialValue + 1 }
      }
      case "ADD-COUNTER-SETTINGS": {
         return{ ...state, maxValue: action.payload.max, initialValue: action.payload.initial, isActive: action.payload.isActive }
      }
      case "FOCUS-MESSAGE": {
         return {...state, isActive: true}
      }
      default:
         return state
   }
}

type resetACType = ReturnType<typeof resetAC>

export const resetAC = (settingInitial: number) => {
   return {
      type: "RESET",
      payload: { settingInitial }
   } as const
}


type upCountACType = ReturnType<typeof upCountAC>

export const upCountAC = () => {
   return {
      type: "UP-COUNT",
      payload: {}
   } as const
}

type addCounterSettingsACType = ReturnType<typeof addCounterSettingsAC>

export const addCounterSettingsAC = (max: number, initial: number, isActive: boolean) => {
   return {
      type: "ADD-COUNTER-SETTINGS",
      payload: {max,initial,isActive}
   } as const
}

type focusMesACType = ReturnType<typeof focusMesAC>

export const focusMesAC = () => {
   return {
      type: "FOCUS-MESSAGE",
      payload: {}
   } as const
}