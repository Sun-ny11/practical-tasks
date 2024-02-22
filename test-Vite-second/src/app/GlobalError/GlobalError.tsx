import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppSelector } from '../store'

export const GlobalError = () => {

  const error = useAppSelector(state => state.app.error)

  const errorMessage = error

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
