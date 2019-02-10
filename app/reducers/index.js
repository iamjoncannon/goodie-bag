import axios from 'axios'

// initial state

const initialState = {

	candyList : [],
	currentCandy : ''
}

// action types

const ALL_CANDY = 'ALL_CANDY'
const CHANGE_CANDY = 'CHANGE_CANDY'

// reducer

const rootReducer = (state = initialState, action) => {

	switch (action.type) {

		case ALL_CANDY: {

			return {...state, candyList: action.candy}
		}

		case CHANGE_CANDY: {

			let newCandyList = state.candyList.map(candy =>{

					if(candy.id === action.id){
						candy.quantity = action.quant
					}
					return candy
			})

			console.log('list: ', newCandyList)

			return {...state, candyList: newCandyList }
		}

		default:

			return state
	}
}

export default rootReducer
