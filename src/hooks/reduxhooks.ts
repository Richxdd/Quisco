import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { Appdispatch, RootState } from '../store'

export const useAppDispatch = () => useDispatch<Appdispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
