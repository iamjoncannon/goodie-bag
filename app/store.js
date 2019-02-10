import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

// action types

const ALL_CANDY = 'ALL_CANDY'
const CHANGE_CANDY = 'CHANGE_CANDY'



// action creators

const gotAllCandy = ( candy ) => {
	
	return {
		type: ALL_CANDY,
		candy
	}
}

const changedCandy = ( quant, id ) => {

	console.log(quant, id)

	return {
		type: CHANGE_CANDY,
		quant,
		id
	}
}

// thunx

export const getAlltheCandyFromServer = () => {

	return async (dispatch) => {
		const serverCandy = await axios.get('/api/candy');
		const myCandy = serverCandy.data
		dispatch(gotAllCandy(myCandy))
	}
}

export const changeCandyQuantityInServer = (newAmt, id) => {

	return async (dispatch) => {
		let dbCall = {quant: newAmt, id: id}
		const serverCandy = await axios.put('/api/candy', dbCall);
		
		dispatch(changedCandy(serverCandy.data.quantity, serverCandy.data.id))
	}
}

export default createStore(

  rootReducer,
  
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))

)
