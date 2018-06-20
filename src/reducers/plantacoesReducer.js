import {
	PLANTAR
} from '../actions'

const initialState = [
	{ nome: "trigo",   preco: 5, pasta: 'cercados' },
	{ nome: "milho",   preco: 5, pasta: 'cercados' },
	{ nome: "morango", preco: 5, pasta: 'cercados' },
]

export const plantacoesReducer = (state=initialState, action) => {
	switch(action.type){
		default:
			return state
	}
}