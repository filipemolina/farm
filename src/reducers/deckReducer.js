import shuffle from 'shuffle-array'

import {
	COMPRAR_CARTAS,
	EMBARALHAR
} from '../actions'

const initialState = [
	{ tipo:  1, virada: false, id: 1 },
	{ tipo:  1, virada: false, id: 2 },
	{ tipo:  1, virada: false, id: 3 },
	{ tipo:  1, virada: false, id: 4 },
	{ tipo:  2, virada: false, id: 5 },
	{ tipo:  2, virada: false, id: 6 },
	{ tipo:  2, virada: false, id: 7 },
	{ tipo:  2, virada: false, id: 8 },
	{ tipo:  3, virada: false, id: 9 },
	{ tipo:  3, virada: false, id: 10 },
	{ tipo:  3, virada: false, id: 11 },
	{ tipo:  3, virada: false, id: 12 },
	{ tipo:  4, virada: false, id: 13 },
	{ tipo:  4, virada: false, id: 14 },
	{ tipo:  4, virada: false, id: 15 },
	{ tipo:  4, virada: false, id: 16 },
	{ tipo:  5, virada: false, id: 17 },
	{ tipo:  5, virada: false, id: 18 },
	{ tipo:  5, virada: false, id: 19 },
	{ tipo:  5, virada: false, id: 20 },
	{ tipo:  6, virada: false, id: 21 },
	{ tipo:  6, virada: false, id: 22 },
	{ tipo:  6, virada: false, id: 23 },
	{ tipo:  6, virada: false, id: 24 },
	{ tipo:  7, virada: false, id: 25 },
	{ tipo:  7, virada: false, id: 26 },
	{ tipo:  7, virada: false, id: 27 },
	{ tipo:  7, virada: false, id: 28 },
	{ tipo:  8, virada: false, id: 29 },
	{ tipo:  8, virada: false, id: 30 },
	{ tipo:  8, virada: false, id: 31 },
	{ tipo:  8, virada: false, id: 32 },
	{ tipo:  9, virada: false, id: 33 },
	{ tipo:  9, virada: false, id: 34 },
	{ tipo:  9, virada: false, id: 35 },
	{ tipo:  9, virada: false, id: 36 },
	{ tipo: 10, virada: false, id: 37 },
	{ tipo: 10, virada: false, id: 38 },
	{ tipo: 10, virada: false, id: 39 },
	{ tipo: 10, virada: false, id: 40 },
]

export const deckReducer = (state=initialState, action) => {
	switch(action.type){
		case EMBARALHAR:
			return shuffle(state)
		case COMPRAR_CARTAS:
			return state.filter(item => !action.cartas.includes(item))
		default:
			return state
	}
}