import { configureStore} from '@reduxjs/toolkit'
import auth from './slice/AuthSlice'
export const store = configureStore({
  reducer: {
    auth: auth
  },
  devTools: true
  
})