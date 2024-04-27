import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// get function type of getState
type GetStateFnType = typeof store.getState
// get return type of function type
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

/**
|--------------------------------------------------
| define a new useSelector, restrict the type of state
|--------------------------------------------------
*/
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual

export default store
