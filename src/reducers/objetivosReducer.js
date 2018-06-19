import shuffle from 'shuffle-array'
import uuidv1 from 'uuid/v1'

import {
	EMBARALHAR_OBJETIVOS,
	SACAR_OBJETIVOS,
} from '../actions'

const iniciais = [
	{ tipo: 1,  pontos: 3, dinheiro: 10,  id: uuidv1()},
	{ tipo: 1,  pontos: 3, dinheiro: 10,  id: uuidv1()},
	{ tipo: 4,  pontos: 3, dinheiro: 10,  id: uuidv1()},
	{ tipo: 4,  pontos: 3, dinheiro: 10,  id: uuidv1()},
	{ tipo: 7,  pontos: 3, dinheiro: 10,  id: uuidv1()},
	{ tipo: 7,  pontos: 3, dinheiro: 10,  id: uuidv1()},
	{ tipo: 10, pontos: 3, dinheiro: 15, id: uuidv1()},
	{ tipo: 10, pontos: 3, dinheiro: 15, id: uuidv1()},
]

const intermediarios = [
	{ tipo: 2,  pontos: 4, dinheiro: 15, id: uuidv1()},
	{ tipo: 3,  pontos: 5, dinheiro: 15, id: uuidv1()},
	{ tipo: 5,  pontos: 4, dinheiro: 15, id: uuidv1()},
	{ tipo: 6,  pontos: 5, dinheiro: 15, id: uuidv1()},
	{ tipo: 8,  pontos: 4, dinheiro: 15, id: uuidv1()},
	{ tipo: 9,  pontos: 5, dinheiro: 15, id: uuidv1()},
	{ tipo: 11, pontos: 6, dinheiro: 15, id: uuidv1()},
	{ tipo: 12, pontos: 8, dinheiro: 20, id: uuidv1()},
	{ tipo: 13, pontos: 5, dinheiro: 20, id: uuidv1()},
	{ tipo: 14, pontos: 5, dinheiro: 20, id: uuidv1()},
	{ tipo: 22, pontos: 5, dinheiro: 15, id: uuidv1()},
	{ tipo: 22, pontos: 5, dinheiro: 15, id: uuidv1()},
]

const finais = [
	{ tipo: 15, pontos: 10, dinheiro: 30, id: uuidv1()},
	{ tipo: 16, pontos: 10, dinheiro: 25, id: uuidv1()},
	{ tipo: 17, pontos: 10, dinheiro: 25, id: uuidv1()},
	{ tipo: 18, pontos: 10, dinheiro: 30, id: uuidv1()},
	{ tipo: 19, pontos: 15, dinheiro: 30, id: uuidv1()},
	{ tipo: 20, pontos: 15, dinheiro: 30, id: uuidv1()},
	{ tipo: 21, pontos: 15, dinheiro: 30, id: uuidv1()},
	{ tipo: 23, pontos: 10, dinheiro: 30, id: uuidv1()},
	{ tipo: 24, pontos: 10, dinheiro: 30, id: uuidv1()},
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