
import { configureStore } from '@reduxjs/toolkit';
// import reducer from '../reducers';
import heroes from '../components/heroesList/HeroesSlice';
import filters from '../reducers/filters';


const stringMiddleware = (store) => (next) => (action) => {
     if (typeof action === 'string')
               return next({type: action})
     return next(action)
}


const store = configureStore({
     reducer: {heroes, filters},
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
     devTools: process.env.NODE_ENV !== 'production'
     
})
export default store;