import shuffle from 'shuffle-array'
import uuidv1 from 'uuid/v1'

import {
	EMBARALHAR_OBJETIVOS,
	SACAR_OBJETIVOS,
} from '../actions'

const iniciais = [
	{ tipo: 1, id: uuidv1()},
	{ tipo: 4, id: uuidv1()},
	{ tipo: 7, id: uuidv1()},
	{ tipo: 10, id: uuidv1()},
	{ tipo: 1, id: uuidv1()},
	{ tipo: 4, id: uuidv1()},
	{ tipo: 7, id: uuidv1()},
	{ tipo: 10, id: uuidv1()},
]

const intermediarios = [
	{ tipo: 2, id: uuidv1()},
	{ tipo: 3, id: uuidv1()},
	{ tipo: 5, id: uuidv1()},
	{ tipo: 6, id: uuidv1()},
	{ tipo: 8, id: uuidv1()},
	{ tipo: 9, id: uuidv1()},
	{ tipo: 11, id: uuidv1()},
	{ tipo: 12, id: uuidv1()},
	{ tipo: 13, id: uuidv1()},
	{ tipo: 14, id: uuidv1()},
]

const finais = [
	{ tipo: 15, id: uuidv1()},
	{ tipo: 16, id: uuidv1()},
	{ tipo: 17, id: uuidv1()},
	{ tipo: 18, id: uuidv1()},
	{ tipo: 19, id: uuidv1()},
	{ tipo: 20, id: uuidv1()},
	{ tipo: 21, id: uuidv1()},
]

const initialState = {
	iniciais,
	intermediarios,
	finais, 
	deck: [
		...shuffle(iniciais).concat(shuffle(intermediarios)).concat(shuffle(finais))
	]
}

export const objetivosReducer = (state=initialState, action) => {
	switch(action.type){
		case EMBARALHAR_OBJETIVOS:
			return {
				...state,
				deck: shuffle(state.iniciais).concat(shuffle(state.intermediarios)).concat(shuffle(state.finais))
			}
		case SACAR_OBJETIVOS:
			return {
				...state,
				deck: state.deck.filter(carta => !action.cartas.includes(carta))
			}
		default:
			return state
	}
}