import {
	PLANTAR
} from '../actions'

const initialState = [
	{ nome: "trigo",   preco: 5 },
	{ nome: "milho",   preco: 5 },
	{ nome: "morango", preco: 5 },
]

export const plantacoesReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}