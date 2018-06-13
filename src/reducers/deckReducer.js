import {
	COMPRAR_CARTA
} from '../actions'

const initialState = [
	{ nome: "" }
]

export const deckReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}