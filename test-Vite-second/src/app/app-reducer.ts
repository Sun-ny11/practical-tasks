export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "SET-APP-STATUS": {
      return { ...state, status: action.status }
    }
    case 'SET-ERROR-MESSAGE': {
      return { ...state, error: action.message }
    }
    default:
      return state
  }
}

type ActionsType = setAppStatusType | setErrorMessageType
type setAppStatusType = ReturnType<typeof setAppStatus>
export const setAppStatus = (status: RequestStatusType) => {
  return {
    type: "SET-APP-STATUS",
    status
  } as const
}
type setErrorMessageType = ReturnType<typeof setErrorMessage>
export const setErrorMessage = (message: RequestStatusType) => {
  return {
    type: "SET-ERROR-MESSAGE",
    message
  } as const
}